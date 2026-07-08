import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class JwtUserDto {
  @ApiProperty({
    example: 'John Doe',
  })
  @IsString()
  sub: string;

  @ApiProperty({
    example: 'admin@gmail.com',
  })
  @IsEmail()
  email: string;
}
