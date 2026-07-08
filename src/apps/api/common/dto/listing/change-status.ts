import { ApiProperty } from '@nestjs/swagger';
import { ListingStatus } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class ChangeStatusDto {
  @ApiProperty({
    enum: ListingStatus,
  })
  @IsEnum(ListingStatus)
  status: ListingStatus;
}
