import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class KeepAliveService implements OnModuleInit {
  private readonly logger = new Logger(KeepAliveService.name);

  constructor(
    private readonly httpService: HttpService,
  ) {}

  onModuleInit() {
    this.logger.log('Keep-alive service initialized');
  }

  @Cron('*/10 * * * *')
  async keepAlive() {
    const serverUrl = "https://yourauto-server.onrender.com"
    
    try {
      const response = await firstValueFrom(
        this.httpService.get(serverUrl)
      );
      this.logger.debug(`Keep-alive ping successful: ${response.status}`);
    } catch (error) {
      this.logger.error('Keep-alive ping failed:', error.message);
    }
  }
}