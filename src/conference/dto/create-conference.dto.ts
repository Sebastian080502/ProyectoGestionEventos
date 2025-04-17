import { IsEmpty, IsString } from "class-validator";

export class CreateConferenceDto {

    @IsString()
    title:string
    @IsString()
    description:string
}
