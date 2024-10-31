import { OptionWithValue } from '../types/verification';

export const VERIFICATION = {
  WALK: {
    type: 'WALK',
    value: 'walk',
  },
  MEAL: {
    type: 'MEAL',
    value: 'meal',
  },
  TREATS: {
    type: 'TREATS',
    value: 'treats',
  },
  BATH: {
    type: 'BATH',
    value: 'bath',
  },
  DAILY: {
    type: 'DAILY',
    value: 'daily',
  },
} as const;

export const COMPLETION_STATUS = {
  COMPLETE: 100,
  PARTIAL: 50,
  MINIMAL: 10,
  DEFAULT: 0,
} as const;

export type VerificationCategoryType =
  (typeof VERIFICATION)[keyof typeof VERIFICATION]['type'];
export type VerificationCategoryValue =
  (typeof VERIFICATION)[keyof typeof VERIFICATION]['value'];

export const VERIFICATION_DETAILS: Record<
  VerificationCategoryType,
  OptionWithValue[]
> = {
  MEAL: [
    { label: '다 먹었어요!', value: COMPLETION_STATUS.COMPLETE },
    { label: '반만 먹었어요!', value: COMPLETION_STATUS.PARTIAL },
    { label: '거의 안먹었어요!', value: COMPLETION_STATUS.MINIMAL },
  ],
  TREATS: [
    { label: '다 먹었어요!', value: COMPLETION_STATUS.COMPLETE },
    { label: '거의 안먹었어요!', value: COMPLETION_STATUS.MINIMAL },
  ],
  BATH: [
    { label: '전신목욕했어요', value: COMPLETION_STATUS.COMPLETE },
    { label: '반만 닦았어요', value: COMPLETION_STATUS.PARTIAL },
    { label: '발만 닦았어요', value: COMPLETION_STATUS.MINIMAL },
  ],
  WALK: [],
  DAILY: [],
};

export const VERIFICATION_DETAIL = 'verificationDetail';
