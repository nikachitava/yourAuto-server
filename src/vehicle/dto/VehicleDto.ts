import { IsNotEmpty, IsString } from "class-validator";


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

    @IsNotEmpty()
    @IsString()
    image: string; 
}
