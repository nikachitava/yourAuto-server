import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class VehicleDto {
    @IsNotEmpty()
    @IsString()
    owner: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsString()
    model: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsString()
    fuelType: string;

    @IsNotEmpty()
    @IsString()
    year: string;

    @IsNotEmpty()
    @IsString()
    price: string;

    @IsNotEmpty()
    @IsString()
    mileage: string;

    @IsNotEmpty()
    @IsString()
    engine: string;

    @IsNotEmpty()
    @IsString()
    gearBox: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional() // Optional, since it may not always be provided during creation
    image?: string; // Optional field to store the image path or URL
}
