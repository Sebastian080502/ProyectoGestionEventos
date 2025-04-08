import { Injectable, OnModuleInit} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class EventService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createEventDto: CreateEventDto) {
    return this.event.create({
      data: createEventDto,
  });
}

findOne() {
  return this.event.findFirst();
}

remove(id: string) {
  return this.event.delete({where:{id}});
}
}
