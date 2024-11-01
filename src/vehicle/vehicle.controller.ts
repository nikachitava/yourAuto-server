import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './schema/vehicle.schema';
import { VehicleDto } from './dto/VehicleDto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('vehicle')
export class VehicleController {

    constructor(private readonly vehicleService: VehicleService) {}

    @Get()
    async findAll(): Promise<Vehicle[]> {
        return this.vehicleService.findAll()
    }

    @Get(":id")
    async findVehicleById(@Param('id') vehicleID: string): Promise<Vehicle> {
        return this.vehicleService.findVehicleById(vehicleID);
    }

    @Post()
    @UseInterceptors(FileInterceptor('image')) 
    async createVehicle(@UploadedFile() file:  Express.Multer.File, @Body() vehicleDto: VehicleDto): Promise<Vehicle> {
        return this.vehicleService.createVehicle(vehicleDto, file); 
    }
}
