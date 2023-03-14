import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';

@Module({
  providers: [MessagesGateway, MessagesService]
})
export class MessagesModule {}
