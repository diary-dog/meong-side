import { UserType } from '@/shared/dto/user.dto';
import { Pet } from '../pet/pet.dto';

export interface User extends UserType {
  hasPet: boolean;
  pets: Pet[];
}
