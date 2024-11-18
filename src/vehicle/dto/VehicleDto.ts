import { IsArray, IsNotEmpty, IsObject, IsString } from "class-validator";


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
    driveType: string;

    @IsNotEmpty()
    @IsString()
    condition: string;

    @IsNotEmpty()
    @IsString()
    door: string;

    @IsNotEmpty()
    @IsString()
    cylinder: string;

    @IsNotEmpty()
    @IsString()
    color: string;

    @IsNotEmpty()
    @IsString()
    vin: string;

    @IsArray()
    @IsString({ each: true })
    image: string[];
}
