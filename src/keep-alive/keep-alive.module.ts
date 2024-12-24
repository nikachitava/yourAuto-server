import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { KeepAliveService } from './keep-alive.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule
  ],
  providers: [KeepAliveService],
  exports: [KeepAliveService]
})
export class KeepAliveModule {}