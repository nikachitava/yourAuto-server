import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class VehicleDto {
    @IsMongoId()
    @IsNotEmpty()
    owner: string;

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
    @IsNumber()
    mileage: number;

    @IsNotEmpty()
    @IsNumber()
    engine: number;

    @IsNotEmpty()
    @IsString()
    gearBox: string;

    @IsOptional() // Optional, since it may not always be provided during creation
    @IsString()
    image?: string; // Optional field to store the image path or URL
}
