import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { Request, response } from 'express';
// import { request } from 'http';
import { Request } from 'express';

import { User } from './user.schema';
import { UserDto } from './user.dto';
import { ObjectId } from 'mongoose';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(@Req() request: Request): Promise<User[]> {
    const result: User[] = await this.userService.getUsers();
    return result;
  }
  @Post()
  createUser(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto);
  }
  @Delete(':id')
  deleteUser(@Param('name') id: ObjectId) {
    return this.userService.deleteUser(id);
  }
}
