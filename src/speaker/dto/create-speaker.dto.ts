import { IsString } from "class-validator";

export class CreateSpeakerDto {
    @IsString()
    name:string;
    @IsString()
    biography:string;
}
