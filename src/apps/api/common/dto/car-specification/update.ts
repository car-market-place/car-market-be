import { PartialType } from '@nestjs/swagger';
import { CreateCarSpecificationDto } from './create';

export class UpdateCarSpecificationDto extends PartialType(CreateCarSpecificationDto) {}
