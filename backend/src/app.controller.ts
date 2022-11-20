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

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Res({ passthrough: true }) response: Response) {
    const user = await this.userService.findOneUser(req.user._doc.email);
    const jwt = this.jwtService.sign({ user: user });
    return {
      statusCode: 201,
      message: 'Logged in successfully',
      token: jwt,
      id: req.user._id,
    };
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // async getProfile(@Request() req) {
  //   return await this.userService.findOneUser(req.user.email);
  // }
}
