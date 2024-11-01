import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/schema/user.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService 
    ) {}

    async signIn(email: string, pass: string): Promise<{ access_token: string; user: User }> {
        const user = await this.usersService.findUser(email);
        if(user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const {password, ...result} = user;
        const accessToken = this.jwtService.sign(result);

        return { 
            access_token: accessToken,
            user: result
        }
    }
}   


