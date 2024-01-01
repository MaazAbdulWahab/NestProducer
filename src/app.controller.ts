import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDTO } from './dtos/message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  sendMessage(@Body() messageDTO: MessageDTO) {
    return this.appService.sendMessage(messageDTO.queueName, messageDTO.message);
  }
}
