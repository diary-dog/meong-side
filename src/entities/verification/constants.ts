import {
  convertToTimeOption,
  findOptionByDetail,
} from './libs/getVerificationInfo';
import { OptionWithValue } from './verification.dto';

export const VERIFICATION = {
  WALK: {
    type: 'WALK',
    value: 'walk',
    title: '산책',
    getDisplay: (detail: number) => convertToTimeOption(detail),
  },
  MEAL: {
    type: 'MEAL',
    value: 'meal',
    title: '식사',
    getDisplay: (detail: number) => findOptionByDetail('MEAL', detail),
  },
  TREATS: {
    type: 'TREATS',
    value: 'treats',
    title: '간식',
    getDisplay: (detail: number) => findOptionByDetail('TREATS', detail),
  },
  BATH: {
    type: 'BATH',
    value: 'bath',
    title: '목욕',
    getDisplay: (detail: number) => findOptionByDetail('BATH', detail),
  },
  DAILY: {
    type: 'DAILY',
    value: 'daily',
    title: '일상',
    getDisplay: (detail: number) => detail.toString(),
  },
} as const;

export const COMPLETION_STATUS = {
  COMPLETE: 100,
  PARTIAL: 50,
  MINIMAL: 10,
  DEFAULT: 0,
} as const;

export type VerificationCategoryType = keyof typeof VERIFICATION;
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
