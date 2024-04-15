import { GENDER } from '../../constants/pet';
import { VerificationCount } from '../../types/verification';
import petMock1ImageUrl from './mock1.jpeg';

export const verificationCountInfo: VerificationCount = {
  name: '월이',
  birthYear: 2019,
  gender: GENDER.MALE,
  imageUrl: petMock1ImageUrl,
  verification: {
    mealCount: 2,
    walkCount: 3,
    bathCount: 4,
    treatsCount: 6,
  },
};
