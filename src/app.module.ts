import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),

    BullModule.registerQueue({ name: 'queue1' }, { name: 'queue2' })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
