import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './schema/vehicle.schema';
import { VehicleController } from './vehicle.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: Vehicle.name, schema: VehicleSchema}])],
  controllers: [VehicleController],
  providers: [VehicleService],
  exports: [VehicleService]
})
export class VehicleModule {}



