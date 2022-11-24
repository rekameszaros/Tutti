import { Ensamble } from './ensamble.schema';
import { User } from 'src/user/user.schema';

import { IsEmail, IsNotEmpty } from 'class-validator';

export class EnsambleDto {
  @IsNotEmpty()
  name: string;

  
  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  shortDescription: string;

  @IsNotEmpty()
  User: User[];

  constructor(
    name: string,
   
    location: string,
    shortDescription: string,
    User: User[],
  ) {
    this.name = name;
 
    this.location = location;
    this.shortDescription = shortDescription;
    this.User = User;
  }
}
