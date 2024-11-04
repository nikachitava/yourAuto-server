import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './schema/vehicle.schema';
import { Model, Types } from 'mongoose';
import { VehicleDto } from './dto/VehicleDto';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class VehicleService {

    constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>) {}

    async findAll(): Promise<any> {
        return this.vehicleModel.find().exec();
    }

    async findVehicleById(id: string): Promise<any> {
        return this.vehicleModel.findById({_id: id});
    }

    async createVehicle(vehicleDto: VehicleDto, file: Express.Multer.File): Promise<Vehicle> {
        let imagePath: string | undefined; // Declare imagePath as optional
        if (file) {
            const uploadPath = path.join(__dirname, '..', '..', 'uploads'); 
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true }); // Create the upload directory
            }
    
            const uniqueFileName = `${uuidv4()}-${file.originalname}`;
            imagePath = path.join(uploadPath, uniqueFileName); 
    
            try {
                fs.writeFileSync(imagePath, file.buffer);
                imagePath = `/uploads/${uniqueFileName}`;
            } catch (error) {
                throw new BadRequestException('Failed to save image');
            }
        }
    
        // Create a new vehicle instance
        const newVehicle = new this.vehicleModel({
            ...vehicleDto,
            owner: new Types.ObjectId(vehicleDto.owner),
            image: imagePath ? imagePath : '', 
        });

    
        return await newVehicle.save();
    }
    

}


