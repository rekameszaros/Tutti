import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EnsambleService } from './ensamble.service';
import { EnsambleDto } from './ensamble.dto';
import { Ensamble } from './ensamble.schema';
import { UserDto } from 'src/user/user.dto';

@Controller('ensamble')
export class EnsambleController {
  constructor(private readonly ensambleService: EnsambleService) {}

  @Get()
  async getEnsambles(): Promise<EnsambleDto[]> {
    const results = await this.ensambleService.getEnsambles();
    return results;
  }

  @Post()
  createEnsamble(@Body() body) {
    console.log(body);
    return {
      ensamble: this.ensambleService.createEnsamble(body),
      statusCode: 201,
    };
  }

  // Users
  @Post(':id/users')
  addUsers(@Param('id') id: string, @Body() User: UserDto) {
    return {
      user: this.ensambleService.addUsers(id, User),
      statusCOde: 201,
    };
  }
}
