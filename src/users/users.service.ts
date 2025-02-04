import { Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) {}


    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

   async findUser(email: string): Promise<User | undefined> {
        return this.userModel.findOne({email})
        
   }

   async findUserByID(id: string):Promise<any> {
        return this.userModel.findById({_id: id})
   }

    async createUser(userData: User) {
        try {
            const newUser = new this.userModel(userData)
            const {password, ...result} = newUser;
            newUser.save();
            const accessToken = this.jwtService.sign(result);

            return { 
                access_token: accessToken,
            };
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
