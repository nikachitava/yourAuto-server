import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}


    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

   async findUser(email: string): Promise<User | undefined> {
        return this.userModel.findOne({email})
        
   }

    async createUser(userData: User): Promise<User> {
        try {
            const newUser = new this.userModel(userData)
            return newUser.save();
        } catch(error) {
            console.log(error)
        }
    }

    async deleteUser(userID: string) {
        try {

            if (!Types.ObjectId.isValid(userID)) {
                return 'Invalid user ID format';
            }

            const deletedUser = await this.userModel.findByIdAndDelete(userID);

            if(!deletedUser) {
                return "User not found";
            }
            return "User deleted successfully"

        } catch(error) {
            console.log(error)
        }
    }
}
