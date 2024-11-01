import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './schema/vehicle.schema';
import { VehicleDto } from './dto/VehicleDto';

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
    async createVehicle(@Body() VehicleDto: VehicleDto): Promise<Vehicle> {
        return this.vehicleService.createVehicle(VehicleDto);
    }
}
