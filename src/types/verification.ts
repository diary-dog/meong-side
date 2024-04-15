import { GENDER_TYPE } from '../constants/pet';
import { VERIFICATION } from '../constants/verifications';

export interface UploadVerification {
  category: (typeof VERIFICATION)[keyof typeof VERIFICATION];
  imageUrl?: string;
  comment?: string;
  verificationOption?: string;
}

export interface VerificationCount {
  name: string;
  birthYear: number;
  gender: GENDER_TYPE;
  imageUrl: string;
  verification: {
    mealCount: number;
    walkCount: number;
    bathCount: number;
    treatsCount: number;
  };
}
