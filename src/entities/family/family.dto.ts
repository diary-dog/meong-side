import { UserType } from '@/shared/dto/user.dto';

export interface Family {
  manager: UserType;
  members: UserType[];
}
