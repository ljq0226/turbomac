import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import {Server,Socket} from 'socket.io'


@WebSocketGateway(80, { cors:{origin:'*'} })
export class MessagesGateway {

  @WebSocketServer()
  server:Server

  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    const message = await this.messagesService.create(createMessageDto)

    this.server.emit('message', message)

    return message


  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  @SubscribeMessage('join')
  joinRoom(@MessageBody('name') name:string,@ConnectedSocket() client:Socket) {

    return this.messagesService.identify(name, client.id)

  }

  @SubscribeMessage('typing')
  async typing(
    @MessageBody('isTyping') isTyping:boolean,
    @ConnectedSocket() client:Socket
    ) { 
      const name = await this.messagesService.getClientName(client.id)
      client.broadcast.emit('typing',{name,isTyping})

  }


}
