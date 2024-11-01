import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { User } from "src/users/schema/user.schema";

@Schema()
export class Vehicle {
    @Prop({ type: Types.ObjectId, ref: 'User' })
    owner: User;

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
    mileage: number;

    @Prop()
    engine: number;

    @Prop()
    gearBox: string;

    @Prop()
    image: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle)