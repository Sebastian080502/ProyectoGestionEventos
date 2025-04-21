import { IsString } from 'class-validator';

export class CreateSponsorDto {
    @IsString()
    name:string;
}
