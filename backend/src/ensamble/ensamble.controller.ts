import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { EnsambleService } from './ensamble.service';
import { EnsambleDto } from './ensamble.dto';
import { Ensamble } from './ensamble.schema';
import { UserDto } from 'src/user/user.dto';

@Controller('ensamble')
export class EnsambleController {
  constructor(private readonly ensambleService: EnsambleService) {}

  // when the page is just loaded it should just get all ensembles
  @Get()
  async getEnsambles(): Promise<EnsambleDto[]> {
    const results = await this.ensambleService.getEnsambles();
    return results;
  }

  // when a filter button is pressed it shold take filter parameter from req and use it as prop for filtering
  @Post('/filter')
  async filterEnsamble(@Body() body) {
    return {
      filteredEnsambles: await this.ensambleService.getFilteredEnsambles(body),
      statusCode: 201,
    };
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
