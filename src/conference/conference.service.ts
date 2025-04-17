import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateConferenceDto } from './dto/create-conference.dto';
import { UpdateConferenceDto } from './dto/update-conference.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ConferenceService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createConferenceDto: CreateConferenceDto) {
    return this.conference.create({
      data:createConferenceDto,
    });
  }

  findOne() {
    return this.conference.findMany();
  }

  update(id: string, updateConferenceDto: UpdateConferenceDto) {
    return this.conference.update ({
      where: {id},
      data: UpdateConferenceDto,
    });
  }

  remove(id: string) {
    return this.conference.delete({
      where:{id},
    });
  }
}
