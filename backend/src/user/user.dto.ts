import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  instrument: string;

  constructor(
    name: string,
    email: string,
    password: string,
    instrument: string,
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.instrument = instrument;
  }
}
