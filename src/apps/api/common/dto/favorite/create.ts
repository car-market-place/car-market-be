import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({
    example: 'cmckrj6ci0001x9m5gwh4e1fa',
    description: 'Listing ID',
  })
  @IsString()
  listingId: string;
}
