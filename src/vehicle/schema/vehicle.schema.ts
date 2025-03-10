import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { User } from "src/users/schema/user.schema";

@Schema()
export class Vehicle {
    @Prop({ type: Types.ObjectId, ref: 'User' })
    owner: User;

    @Prop()
    title: string;


    @Prop()
    brand: string;

    @Prop()
    model: string;

    @Prop()
    type: string;

    @Prop()
    status: string;

    @Prop()
    fuelType: string;

    @Prop()
    year: string;

    @Prop()
    price: string;

    @Prop()
    mileage: string;

    @Prop()
    engine: string;

    @Prop()
    gearBox: string;

    @Prop()
    description: string;

    @Prop()
    driveType: string;

    @Prop()
    condition: string;

    @Prop()
    door: string;

    @Prop()
    cylinder: string;

    @Prop()
    color: string;

    @Prop()
    vin: string;

    @Prop({ type: [String] }) 
    image: string[];

}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle)