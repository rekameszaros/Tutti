import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
// import { Request, response } from 'express';
// import { request } from 'http';
import { User } from './user.schema';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //   @Get()
  //   async getBusinessCards(): Promise<BusinessCard[]> {
  //     // console.log(request);
  //     const result: BusinessCard[] =
  //       await this.businessCardService.getBusinessCards();
  //     console.log(result);
  //     return result;
  //   }
  //   @Delete(':id')
  //   deleteBusinessCard(@Param('id') id: string) {
  //     console.log(id);
  //   }
  @Post()
  createUser(@Body() body) {
    console.log(body);
    this.userService.createUser(body);
  }
}
