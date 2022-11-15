import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Res({ passthrough: true }) response: Response) {
    // console.log(req.user);
    const user = await this.userService.findOneUser(req.user._doc.email);
    const jwt = this.jwtService.sign({ user: user });
    return {
      statusCode: 201,
      message: 'Logged in successfully',
      token: jwt,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    // console.log(req.user);
    console.log('response in contorller');
    console.log(req.user);
    return await this.userService.findOneUser(req.user.email);
  }
}
