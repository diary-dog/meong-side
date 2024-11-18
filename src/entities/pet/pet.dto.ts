import { VerificationResponse } from '../verification/verification.dto';
import { GENDER_TYPE } from './constants';

export interface Pet {
  id: string;
  name: string;
  imageUrl: string;
  birthYear: number;
  gender: GENDER_TYPE;
  createdAt: string;
  verifications: {
    MEAL: {
      total: number;
      data: VerificationResponse[];
    };
    WALK: {
      total: number;
      data: VerificationResponse[];
    };
    BATH: {
      total: number;
      data: VerificationResponse[];
    };
    TREATS: {
      total: number;
      data: VerificationResponse[];
    };
    DAILY: {
      total: number;
      data: VerificationResponse[];
    };
  };
}
