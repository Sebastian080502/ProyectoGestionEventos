import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateConferenceDto } from './dto/create-conference.dto';
import { UpdateConferenceDto } from './dto/update-conference.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ConferenceService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // Crear una nueva conferencia
  create(createConferenceDto: CreateConferenceDto) {
    // Convertir las fechas a tipo Date
    const { startDate, endDate, ...conferenceData } = createConferenceDto;
    
    return this.conference.create({
      data: {
        ...conferenceData,
        startDate: new Date(startDate),  // Convertir la fecha de inicio
        endDate: new Date(endDate),      // Convertir la fecha de fin
      },
    });
  }

  // Obtener todas las conferencias
  findOne() {
    return this.conference.findMany();
  }

  // Actualizar una conferencia
  update(id: string, updateConferenceDto: UpdateConferenceDto) {
    // Convertir las fechas a tipo Date si están presentes en el DTO
    const { startDate, endDate, ...conferenceData } = updateConferenceDto;

    return this.conference.update({
      where: { id },
      data: {
        ...conferenceData,
        ...(startDate && { startDate: new Date(startDate) }),  // Convertir fecha de inicio si existe
        ...(endDate && { endDate: new Date(endDate) }),        // Convertir fecha de fin si existe
      },
    });
  }

  // Eliminar una conferencia
  remove(id: string) {
    return this.conference.delete({
      where: { id },
    });
  }
}
