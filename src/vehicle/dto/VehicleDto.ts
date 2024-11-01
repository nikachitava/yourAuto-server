import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";


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
}
