import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { ChatService } from './chat.service'
import { UpdateChatDto } from './dto/update-chat.dto'
@WebSocketGateway(80, {
  cors: {
    origin: '*',
  },
})

export class ChatGateway implements OnGatewayConnection {
  constructor(private readonly chatService: ChatService) {
    this.defaultGroup = 'TurboRoom'
  }

  @WebSocketServer() server: Server
  defaultGroup: string

  // onconnection call
  async handleConnection(client: Socket): Promise<string> {
    // default join public room
    client.join(this.defaultGroup)
    const users = await this.server.fetchSockets()
    console.log(' ', Object.keys(users[0]))
    console.log(' ', users[0].handshake.query.userId)
    console.log('-0---------- ')

    return 'connect success'
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string,
  @ConnectedSocket() client: Socket) {
    console.log(' message ', message)
    console.log(' ', client.id)
    return message
  }

  @SubscribeMessage('findAllChat')
  findAll() {
    return this.chatService.findAll()
  }

  @SubscribeMessage('findOneChat')
  findOne(@MessageBody() id: number) {
    return this.chatService.findOne(id)
  }

  @SubscribeMessage('updateChat')
  update(@MessageBody() updateChatDto: UpdateChatDto) {
    return this.chatService.update(updateChatDto.id, updateChatDto)
  }

  @SubscribeMessage('removeChat')
  remove(@MessageBody() id: number) {
    return this.chatService.remove(id)
  }
}
