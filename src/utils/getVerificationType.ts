import { VERIFICATION } from '../constants/verifications';

export const getVerificationType = (type: string) => {
  switch (type) {
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
