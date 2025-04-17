import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConferenceService } from './conference.service';
import { CreateConferenceDto } from './dto/create-conference.dto';
import { UpdateConferenceDto } from './dto/update-conference.dto';

@Controller('conference')
export class ConferenceController  {
  constructor(private readonly conferenceService: ConferenceService) {}

  @Post()
  create(@Body() createConferenceDto: CreateConferenceDto) {
    return this.conferenceService.create(createConferenceDto);
  }


  @Get('')
  findOne() {
    return this.conferenceService.findOne();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConferenceDto: UpdateConferenceDto) {
    return this.conferenceService.update(id, updateConferenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conferenceService.remove(id);
  }
}
