import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
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
    async createVehicle(@Body() vehicleDto: VehicleDto): Promise<Vehicle> {
        return this.vehicleService.createVehicle(vehicleDto); 
    }

    @Delete(":id")
    async deleteVehicle(@Param('id') vehicleID: string): Promise<any> {
        return this.vehicleService.deleteVehicle(vehicleID)
    }

    @Patch(':id')
    async updateVehicle(
        @Param('id') id: string,
        @Body() updateData: Partial<VehicleDto>
    ) {
        return this.vehicleService.updateVehicle(id, updateData);
    }


    @Get('/owner/:id')
    async fetchUserVehicle(@Param('id') userID: string): Promise<any> {
        return this.vehicleService.fetchUserVehicle(userID)

    }

}
