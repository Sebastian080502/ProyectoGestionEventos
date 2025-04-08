import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    
  }
  create(createUserDto: CreateUserDto) {
    return this.user.create({
      data: createUserDto,
  });
}

  findOne() {
    return this.user.findFirst();
  }

  remove(id: string) {
    return this.user.delete({where:{id}});
  }
}
