import { IsString } from 'class-validator';

export class CreateFeedbackDto {

    @IsString()
   rating: number;
    @IsString()
    comment: string;
}
