import { Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/user.dto';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneUser(username);

    if (user) {
      const matched = comparePasswords(pass, user.password);

      if (matched) {
        return user;
      } else {
        console.log('passwords do not match');
        return null;
      }
    }
    return null;
  }

  async login(user: any) {
    console.log('User', user);
    const payload = { username: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
