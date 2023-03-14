import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {

  messgaes:Message[] = [{name:'asd',text:'hello'}]
  clientToUser = {}

  create(createMessageDto: CreateMessageDto) {
    return this.messgaes.push(createMessageDto);
  }

  findAll() {
    return this.messgaes
  }


  identify(name:string,clientid:string){
    this.clientToUser[clientid] = name

    return Object.values(this.clientToUser)

  }

  getClientName(clientid:string){
    return this.clientToUser[clientid]
  }
}
