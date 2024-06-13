import { VERIFICATION } from '../constants/verification';

export const CATEGORY_ERROR_MESSAGE = '알 수 없는 카테고리 입니다.';

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
    case VERIFICATION.DAILY:
      return '일상';
    default:
      throw new Error(CATEGORY_ERROR_MESSAGE);
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
    case VERIFICATION.DAILY:
      return VERIFICATION.DAILY;
    default:
      throw new Error(CATEGORY_ERROR_MESSAGE);
  }
};
