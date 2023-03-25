import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { PrismaService } from 'nestjs-prisma'
import { Server, Socket } from 'socket.io'
import { PAGINATION, PUBLIC_ROOM } from '../../common/Constant'
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
    this.pageSize = PAGINATION
    this.users = []
  }

  @WebSocketServer() server: Server
  defaultGroup: string
  pageSize: number
  users: string[]
  // onconnection call
  async handleConnection(client: Socket): Promise<string> {
    // default join public room
    client.join(this.defaultGroup)
    this.getOnlineUsers(client)
    // when a user join the room,sent him the messages
    this.getMessages(client, { page: 1 })

    return 'connect success'
  }

  // get online users
  @SubscribeMessage('onlineUsers')
  async getOnlineUsers(
    @ConnectedSocket() client: Socket,
  ) {
    const data = await this.getActiveUser()
    client.emit('onlineUsers', data)
  }

  @SubscribeMessage('getMessages')
  async getMessages(
    @ConnectedSocket() client: Socket,
    @MessageBody() { page }: { page: number },
  ) {
    const length = await this.prisma.message.count()
    const take = page * this.pageSize
    const skip = (length - take < 0) ? 0 : (length - take)

    const messages = await this.prisma.message.findMany({
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
      skip,
      take,
    })
    client.emit('getMessages', messages)
    return messages
  }

  @SubscribeMessage('createMessage')
  async createMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() { message, type, userId, size, page }: { message: string;type: string; userId: string; size: string;page: number },
  ) {
    // first: create a new  message
    await this.prisma.message.create({
      data: {
        userId,
        roomId: PUBLIC_ROOM,
        content: message,
        type,
        size,
      },
    })
    const length = await this.prisma.message.count()
    const take = page * this.pageSize
    const skip = (length - take < 0) ? 0 : (length - take)
    const messages = await this.prisma.message.findMany({
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
      skip,
      take,
    })
    client.emit('getMessages', messages)
    client.to(PUBLIC_ROOM).emit('getMessages', messages)
  }

  async getActiveUser() {
    const sockets = await this.server.fetchSockets()
    const userIdArr = sockets.map(item => item.handshake.query.id)
    const realUser = userIdArr.filter(item => item !== undefined)
    const res = []
    for (const userId of realUser) {
      const user = await this.prisma.user.findUnique({
        where: {
          id: userId as string,
        },
        select: {
          id: true,
          username: true,
          avatar: true,
          role: true,
        },
      })
      res.push(user)
    }
    return res
  }
}
