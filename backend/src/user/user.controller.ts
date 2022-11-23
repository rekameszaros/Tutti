import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';
import { UserDto } from './user.dto';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // does not work yet perfectly
  // @UseGuards(JwtAuthGuard)

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return this.userService.getOneUser(id);
  }

  // this solves the error in the console but makes the get on top not work anymore
  // @Get('/')
  // async getUsers(@Req() request: Request): Promise<User[]> {
  //   const result: User[] = await this.userService.getUsers();
  //   return result;
  // }

  @Post()
  createUser(@Body() userDto: UserDto, @Request() req) {
    return {
      user: this.userService.createUser(userDto),
      statusCode: 201,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteUser(@Param('id') id: ObjectId) {
    return this.userService.deleteUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  putUser(@Body() user: UserDto, @Param('id') id: string) {
    return this.userService.updateUser(user, id);
  }
}
