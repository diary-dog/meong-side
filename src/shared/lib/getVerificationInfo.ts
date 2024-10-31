/* eslint-disable @typescript-eslint/ban-types */
import {
  VERIFICATION,
  VERIFICATION_DETAILS,
  VerificationCategoryType,
  VerificationCategoryValue,
} from '../constants/verification';
import { OptionWithValue } from '../types/verification';

export const CATEGORY_ERROR_MESSAGE = '알 수 없는 카테고리 입니다.';

export const getVerificationTitle = (
  category: VerificationCategoryType | ({} & string)
) => {
  switch (category) {
    case VERIFICATION.WALK.type:
      return '산책';
    case VERIFICATION.MEAL.type:
      return '식사';
    case VERIFICATION.TREATS.type:
      return '간식';
    case VERIFICATION.BATH.type:
      return '목욕';
    case VERIFICATION.DAILY.type:
      return '일상';
    default:
      throw new Error(CATEGORY_ERROR_MESSAGE);
  }
};

export const getVerificationValue = (
  category: VerificationCategoryValue | ({} & string)
) => {
  switch (category) {
    case VERIFICATION.WALK.value:
      return '산책';
    case VERIFICATION.MEAL.value:
      return '식사';
    case VERIFICATION.TREATS.value:
      return '간식';
    case VERIFICATION.BATH.value:
      return '목욕';
    case VERIFICATION.DAILY.value:
      return '일상';
    default:
      throw new Error(CATEGORY_ERROR_MESSAGE);
  }
};

export const getVerificationCategoryByValue = (
  category: VerificationCategoryType | ({} & string)
) => {
  switch (category) {
    case VERIFICATION.WALK.value:
      return VERIFICATION.WALK;
    case VERIFICATION.MEAL.value:
      return VERIFICATION.MEAL;
    case VERIFICATION.TREATS.value:
      return VERIFICATION.TREATS;
    case VERIFICATION.BATH.value:
      return VERIFICATION.BATH;
    case VERIFICATION.DAILY.value:
      return VERIFICATION.DAILY;
    default:
      throw new Error(CATEGORY_ERROR_MESSAGE);
  }
};

type VerificationHandler = (
  detail: number
) => OptionWithValue | TimeOptionWithValue | string | undefined;

const findOptionByDetail = (
  category: keyof typeof VERIFICATION_DETAILS,
  detail: number
): OptionWithValue | undefined => {
  if (!VERIFICATION_DETAILS[category]) {
    throw new Error('잘못된 내용입니다.');
  }
  return VERIFICATION_DETAILS[category].find(
    (option) => option.value === detail
  );
};
interface TimeOptionWithValue {
  hours?: number;
  minutes?: number;
}
const convertToTimeOption = (
  minutes: number
): TimeOptionWithValue | undefined => {
  if (minutes < 0) return undefined;
  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60,
  };
};

export const getVerificationDetail: Record<
  VerificationCategoryType,
  VerificationHandler
> = {
  MEAL: (detail) => findOptionByDetail(VERIFICATION.MEAL.type, +detail),
  TREATS: (detail) => findOptionByDetail(VERIFICATION.TREATS.type, +detail),
  BATH: (detail) => findOptionByDetail(VERIFICATION.BATH.type, +detail),
  WALK: convertToTimeOption,
  DAILY: (detail) => detail.toString(),
};

export const isTimeOption = (
  option: OptionWithValue | TimeOptionWithValue | undefined
): option is TimeOptionWithValue => {
  return option !== undefined && ('hours' in option || 'minutes' in option);
};

export const getDisplayOption = (option: ReturnType<VerificationHandler>) => {
  if (!option) {
    throw new Error('존재하지 않는 값 입니다.');
  }
  if (typeof option === 'string') {
    return option;
  }
  if (isTimeOption(option)) {
    let hours = '';
    let minutes = '';
    if (option.hours && option.hours > 0) {
      hours = `${option.hours}시`;
    }
    if (option.minutes && option.minutes > 0) {
      minutes = `${option.minutes}분`;
    }
    return hours + ' ' + minutes;
  }
  return option.label;
};
