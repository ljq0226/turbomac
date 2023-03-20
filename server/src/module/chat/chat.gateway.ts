import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Server, Socket } from 'socket.io';
@WebSocketGateway(80,{  cors: {
    origin: '*',
  },})
export class ChatGateway implements OnGatewayConnection {
@WebSocketServer() server: Server;
  constructor(private readonly chatService: ChatService) {}


  handleConnection(client: Socket,message: string) {
    console.log(`Client connected: ${client.id}`); 
    client.emit('events', { name: 'Nest' });
    client.on('message',()=>{
    console.log(`Received message: ${message}`);
    client.emit('events', { name: 'Nest' });  
  })
  }
  @SubscribeMessage('message')
  handleMessage( @MessageBody() message: string,
  @ConnectedSocket() client: Socket,) {

  console.log(' message ', message)
  console.log(' ', client.id)
  return message
  }

  @SubscribeMessage('findAllChat')
  findAll() {
    return this.chatService.findAll();
  }

  @SubscribeMessage('findOneChat')
  findOne(@MessageBody() id: number) {
    return this.chatService.findOne(id);
  }

  @SubscribeMessage('updateChat')
  update(@MessageBody() updateChatDto: UpdateChatDto) {
    return this.chatService.update(updateChatDto.id, updateChatDto);
  }

  @SubscribeMessage('removeChat')
  remove(@MessageBody() id: number) {
    return this.chatService.remove(id);
  }
}
