import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class RejectListingDto {
  @ApiProperty({
    example: 'Thiếu hình ảnh xe',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  reason: string;
}
