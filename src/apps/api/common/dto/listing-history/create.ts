import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { HistoryAction } from '@prisma/client';
import { IsEnum, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateListingHistoryDto {
  @ApiProperty({
    enum: HistoryAction,
  })
  @IsEnum(HistoryAction)
  action: HistoryAction;

  @ApiPropertyOptional({
    type: Object,
  })
  @IsOptional()
  @IsObject()
  oldValue?: Record<string, any>;

  @ApiPropertyOptional({
    type: Object,
  })
  @IsOptional()
  @IsObject()
  newValue?: Record<string, any>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  note?: string;
}
