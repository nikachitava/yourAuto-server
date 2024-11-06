import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
        return this.vehicleModel.find().populate("owner", "name surname phone").exec();
    }

    async findVehicleById(id: string): Promise<any> {
        return this.vehicleModel.findById({_id: id}).populate("owner", "name surname phone").exec();
    }

    async createVehicle(vehicleDto: VehicleDto, file: Express.Multer.File): Promise<Vehicle> {
        let imagePath: string | undefined; 
        if (file) {
            const uploadPath = path.join(__dirname, '..', '..', 'uploads'); 
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true }); 
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

    
        const newVehicle = new this.vehicleModel({
            ...vehicleDto,
            owner: new Types.ObjectId(vehicleDto.owner),
            image: imagePath ? imagePath : '', 
        });

    
        return await newVehicle.save();
    }

    async deleteVehicle(id: string): Promise<any> {
        return this.vehicleModel.deleteOne({_id: id})
    }

    async updateVehicle(id: string, updateData: Partial<Vehicle>): Promise<Vehicle> {
        if (Object.keys(updateData).length === 0) {
            throw new BadRequestException("No fields to update");
        }

        const updatedVehicle = await this.vehicleModel.findByIdAndUpdate(
            new Types.ObjectId(id),
            { $set: updateData },  
            { new: true }           
        ).exec();

        if (!updatedVehicle) throw new BadRequestException("Vehicle not found");

        return updatedVehicle;
    }

    async fetchUserVehicle(userID: string): Promise<any> {
        const ownerObjectId = new Types.ObjectId(userID);
        return this.vehicleModel.find({ 'owner': ownerObjectId }).exec();
    }

}


