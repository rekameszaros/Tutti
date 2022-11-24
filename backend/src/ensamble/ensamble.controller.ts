import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EnsambleService } from './ensamble.service';

// import { Request, response } from 'express';
// import { request } from 'http';
import { Ensamble } from './ensamble.schema';
@Controller('ensamble')
export class EnsambleController {
  constructor(private readonly ensambleService: EnsambleService) {}

  @Get()
  async getEnsambles(): Promise<any> {
    const results = await this.ensambleService.getEnsambles();
    return results;
  }

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
  createEnsamble(@Body() body) {
    console.log(body);
    return {
      ensamble: this.ensambleService.createEnsamble(body),
      statusCode: 201,
    };
  }
}
