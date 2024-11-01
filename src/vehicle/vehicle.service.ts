import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './schema/vehicle.schema';
import { Model, Types } from 'mongoose';
import { VehicleDto } from './dto/VehicleDto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class VehicleService {

    constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>) {}

    async findAll(): Promise<any> {
        return this.vehicleModel.find().exec();
    }

    async findVehicleById(id: string): Promise<any> {
        return this.vehicleModel.findById({id});
    }

    async createVehicle(vehicleDto: VehicleDto, file: Express.Multer.File): Promise<Vehicle> {
        let imagePath = '';
        if (file) {
            const uploadPath = path.join(__dirname, '..', '..', 'uploads'); 
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath); 
            }
            imagePath = path.join(uploadPath, file.originalname); 
            fs.writeFileSync(imagePath, file.buffer); 
        }

        const newVehicle = new this.vehicleModel({
            ...vehicleDto,
            owner: new Types.ObjectId(vehicleDto.owner),
            image: imagePath, 
        });

        return newVehicle.save();
    }
}
