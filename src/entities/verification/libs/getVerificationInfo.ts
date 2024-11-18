import { INVALID_CATEGORY, INVALID_CONTENTS } from '@/shared/constants/message';
import {
  VERIFICATION,
  VERIFICATION_DETAILS,
  VerificationCategoryType,
} from '../constants';
import { OptionWithValue } from '../verification.dto';

export const getVerificationMetadata = (string: string) => {
  const category = string.toUpperCase() as VerificationCategoryType;
  const metadata = VERIFICATION[category];
  if (!metadata) throw new Error(INVALID_CATEGORY);
  return metadata;
};

export const getVerificationTitle = (category: VerificationCategoryType) => {
  const metadata = VERIFICATION[category];
  if (!metadata) throw new Error(INVALID_CATEGORY);
  return metadata.title;
};

export const getVerificationDetail = (
  category: VerificationCategoryType,
  detail: number
) => {
  const metadata = VERIFICATION[category];
  return metadata.getDisplay(Number(detail));
};

export const findOptionByDetail = (
  category: VerificationCategoryType,
  detail: number
) => {
  const options = VERIFICATION_DETAILS[category];
  if (!options) throw new Error(INVALID_CONTENTS);
  return options.find((option) => option.value === detail);
};

interface TimeOptionWithValue {
  hours?: number;
  minutes?: number;
}

export const convertToTimeOption = (
  minutes: number
): TimeOptionWithValue | undefined => {
  if (minutes < 0) return undefined;
  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60,
  };
};

export const isTimeOption = (
  option: OptionWithValue | TimeOptionWithValue | undefined
): option is TimeOptionWithValue => {
  return option !== undefined && ('hours' in option || 'minutes' in option);
};

export const getDisplayOption = (
  option: ReturnType<typeof getVerificationDetail>
) => {
  if (!option) throw new Error('존재하지 않는 값입니다.');
  if (typeof option === 'string') return option;
  if (isTimeOption(option)) {
    return `${option.hours ? `${option.hours}시 ` : ''}${option.minutes ? `${option.minutes}분` : ''}`;
  }
  return option.label;
};

export const isExistTimeOption = (option: TimeOptionWithValue = {}) => {
  return Object.values(option).filter(Boolean).length > 0;
};
