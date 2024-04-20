import { GENDER_TYPE } from '../constants/pet';
import {
  VERIFICATION,
  VerificationCategoryType,
} from '../constants/verifications';

interface User {
  id: string;
  imageUrl: string;
  name: string;
}

export interface UploadVerificationContents {
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

export interface WalkOption extends DefaultOption {
  hour?: string;
  minutes?: string;
}

export interface DefaultOption {
  verificationOption?: string;
  comment?: string;
  imageUrl?: File[];
}
export type UploadVerificationForm = WalkOption | DefaultOption;

export interface VerificationsForCalendar {
  year: number;
  month: number;
  dates: DateBasedVerification[];
}

interface DateBasedVerification {
  date: string;
  verifications: VerificationByDate[];
}
export interface VerificationByDate {
  category: VerificationCategoryType;
  verificationCount: number;
  verificationDetails: Array<{
    verificationOption: string;
    createdAt: Date;
    author: User;
  }>;
}
