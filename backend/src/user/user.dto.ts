import { IsEmail, IsNotEmpty } from 'class-validator';
import { Ensamble } from 'src/ensamble/ensamble.schema';
export class UserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  // @IsNotEmpty()
  password: string;

  // @IsNotEmpty()
  instrument: Array<Object>;

  // @IsNotEmpty()
  Ensambles: Ensamble[];

  constructor(
    name: string,
    email: string,
    password: string,
    instrument: Array<Object>,
    Ensambles: Ensamble[],
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.instrument = instrument;
    this.Ensambles = Ensambles;
  }
}
