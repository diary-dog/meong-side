import { VERIFICATION } from '../constants/verifications';

export const getVerificationTitle = (category: string) => {
  switch (category) {
    case VERIFICATION.WALK:
      return '산책';
    case VERIFICATION.MEAL:
      return '식사';
    case VERIFICATION.TREATS:
      return '간식';
    case VERIFICATION.BATH:
      return '목욕';
    default:
      return '일상';
  }
};

export const getVerificationCategory = (category: string) => {
  switch (category) {
    case VERIFICATION.WALK:
      return VERIFICATION.WALK;
    case VERIFICATION.MEAL:
      return VERIFICATION.MEAL;
    case VERIFICATION.TREATS:
      return VERIFICATION.TREATS;
    case VERIFICATION.BATH:
      return VERIFICATION.BATH;
    default:
      return VERIFICATION.DAILY;
  }
};
