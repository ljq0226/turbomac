import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { PrismaService } from 'nestjs-prisma'
import { Server, Socket } from 'socket.io'
import { PUBLIC_ROOM } from '../../common/Constant'
@WebSocketGateway(80, {
  cors: {
    origin: '*',
  },
})

export class ChatGateway implements OnGatewayConnection {
  constructor(
    private prisma: PrismaService,
  ) {
    this.defaultGroup = PUBLIC_ROOM
  }

  @WebSocketServer() server: Server
  defaultGroup: string

  // onconnection call
  async handleConnection(client: Socket): Promise<string> {
    // default join public room
    client.join(this.defaultGroup)
    const users = await this.server.fetchSockets()

    // when a user join the room,sent him the messages
    this.getMessages(client)
    // console.log(' ', Object.keys(users[0]))
    // console.log(' ', users[0].handshake.query.userId)
    // console.log('-0---------- ')

    return 'connect success'
  }

  @SubscribeMessage('getMessages')
  async getMessages(
    @ConnectedSocket() client: Socket,
  ) {
    const messages = await this.prisma.message.findMany({
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    })
    client.emit('getMessages', messages)
    return messages
  }

  @SubscribeMessage('createMessage')
  async createMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() { message, type, userId, size }: { message: string;type: string; userId: string; size: string },
  ) {
    const newMes = await this.prisma.message.create({
      data: {
        userId,
        roomId: PUBLIC_ROOM,
        content: message,
        type,
        size,
      },
    })
    const messages = await this.prisma.message.findMany({
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    })
    client.emit('getMessages', messages)
    client.to(PUBLIC_ROOM).emit('getMessages', messages)
    return await this.prisma.message.findUnique({
      where: {
        id: newMes.id,
      },
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    })
  }
}
