import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { Connection } from 'mongoose';
import { AuthModule } from './auth/auth.module';
import { VehicleController } from './vehicle/vehicle.controller';
import { VehicleModule } from './vehicle/vehicle.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { KeepAliveModule } from './keep-alive/keep-alive.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://chitava18official:qzeZAdaImhykCccJ@yourauto.9tufd.mongodb.net/yourAutoDB?retryWrites=true&w=majority&appName=yourAuto'
    ),
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    HttpModule,
    KeepAliveModule,
    UsersModule,
    AuthModule,
    VehicleModule,
    JwtModule.register({
        global: true,
        secret: 'testSecretKeya@', 
        signOptions: { expiresIn: '24h' }, 
      })
  ],
  controllers: [AppController, VehicleController],
  providers: [AppService],
})

export class AppModule implements OnModuleInit {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  onModuleInit() {
    console.log('AppModule initialized.');

    this.connection.on('connected', () => {
      console.log('MongoDB connected successfully.');
    });

    this.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });

    this.connection.on('disconnected', () => {
      console.log('MongoDB disconnected.');
    });
  }
}