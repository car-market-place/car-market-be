import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ReportReason } from '@prisma/client';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateReportListingDto {
  @ApiProperty({
    example: 'cmckrj6ci0001x9m5gwh4e1fa',
  })
  @IsString()
  listingId: string;

  @ApiProperty({
    enum: ReportReason,
  })
  @IsEnum(ReportReason)
  reason: ReportReason;

  @ApiPropertyOptional({
    example: 'Xe đã bán nhưng vẫn còn đăng.',
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;
}
