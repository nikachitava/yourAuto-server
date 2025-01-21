import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './schema/user.schema';
import {UsersService} from './users.service'
import { createUserDto } from './dto/createUserDto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findUserByID(@Param('id') userID: string): Promise<any> {
        return this.usersService.findUserByID(userID)
    }
    

    @Post()
    async create(@Body() createUserDto: createUserDto) {
        return this.usersService.createUser(createUserDto);
    }
    
    @Delete(':id')
    async deleteUser(@Param('id') userID: string) {
        return this.usersService.deleteUser(userID)
    }

}
