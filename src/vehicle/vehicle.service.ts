import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './schema/vehicle.schema';
import { Model, Types } from 'mongoose';
import { VehicleDto } from './dto/VehicleDto';

@Injectable()
export class VehicleService {

    constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>) {}

    async findAll(): Promise<any> {
        return this.vehicleModel.find().exec();
    }

    async findVehicleById(id: string): Promise<any> {
        return this.vehicleModel.findById({id});
    }

    async createVehicle(vehicleDto: VehicleDto): Promise<any> {
        try {
            const newVehicle = new this.vehicleModel({
                ...vehicleDto,
                owner: new Types.ObjectId(vehicleDto.owner),
            });
            return newVehicle.save();
        } catch(error) {
            console.log(error)
        }
    }
}
