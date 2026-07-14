import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional } from 'class-validator';

export class ApproveListingDto {
  @ApiPropertyOptional({
    example: '2026-08-01T00:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  expiredAt?: string;
}
