import { Ensamble } from './ensamble.schema';
import { User } from 'src/user/user.schema';

import { IsEmail, IsNotEmpty } from 'class-validator';

export class EnsambleDto {
  @IsNotEmpty()
  createdBy: Object;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  shortDescription: string;

  @IsNotEmpty()
  User: User[];

  constructor(
    createdBy: string,
    name: string,
    location: string,
    shortDescription: string,
    User: User[],
  ) {
    this.createdBy = createdBy;
    this.name = name;
    this.location = location;
    this.shortDescription = shortDescription;
    this.User = User;
  }
}
