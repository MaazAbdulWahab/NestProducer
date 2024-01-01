import { InjectQueue, OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job, Queue } from 'bull';

@Injectable()
export class AppService {

  private queueMapping = { 'queue1': this.queue1, 'queue2': this.queue2 }

  constructor(@InjectQueue('queue1') private queue1: Queue,
    @InjectQueue('queue2') private queue2: Queue) { }

  async sendMessage(queueName: string, message: string) {
    try {
      let job = await this.queueMapping[queueName].add('job', { 'message': message });

      for (let i = 0; i < 100; i++) {
        console.log(i)
      }
      console.log(await job.isCompleted())
      return { success: true }
    }
    catch (e) {
      return { success: false }
    }



  }
}

