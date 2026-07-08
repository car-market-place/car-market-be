import { ApiProperty } from '@nestjs/swagger';
import { ReportStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

export class ResolveReportDto {
  @ApiProperty({
    enum: ReportStatus,
    example: 'RESOLVED',
  })
  @IsEnum(ReportStatus)
  status: ReportStatus;

  @ApiProperty({
    example: 'Đã kiểm tra và xử lý.',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  note?: string;
}
