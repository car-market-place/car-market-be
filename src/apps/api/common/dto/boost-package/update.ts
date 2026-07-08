import { PartialType } from '@nestjs/swagger';
import { CreateBoostPackageDto } from './create';

export class UpdateBoostPackageDto extends PartialType(CreateBoostPackageDto) {}
