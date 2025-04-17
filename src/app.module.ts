import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { SpeakerModule } from './speaker/speaker.module';
import { ConferenceModule } from './conference/conference.module';
import { RegistrationModule } from './registration/registration.module';
import { SponsorModule } from './sponsor/sponsor.module';


@Module({
  imports: [UserModule, EventModule, SpeakerModule, ConferenceModule, RegistrationModule, SponsorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
