import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }


  @Get('')
  findOne() {
    return this.eventService.findOne();
  }

   @Patch(':id')
    update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
      return this.eventService.update(id, updateEventDto);
    }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
