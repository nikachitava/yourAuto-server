import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CatDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User)