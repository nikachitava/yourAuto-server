import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signInDto: Record<string, any>, @Res() res: Response) {

        const { access_token, user } = await this.authService.signIn(signInDto.email, signInDto.password);
        res.cookie('access_token', access_token, {
            httpOnly: true, 
            secure: true, 
            maxAge: 3600000, 
        });

        return res.send({ message: 'Signed in successfuly', access_token, user });
    }


    @Post('logout')
    async logout(@Res() res: Response) {
        res.clearCookie('access_token', { 
            httpOnly: true,
            secure: true 
        });

        return res.send({ message: 'Logged out successfully' });
    }
}
