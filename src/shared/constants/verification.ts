export const VERIFICATION = {
  WALK: 'walk',
  MEAL: 'meal',
  TREATS: 'treats',
  BATH: 'bath',
  DAILY: 'daily',
} as const;

export type VerificationCategoryType =
  (typeof VERIFICATION)[keyof typeof VERIFICATION];

export const MEAL_OPTION = {
  ALL: '다 먹었어요!',
  HALF: '반만 먹었어요!',
  NONE: '거의 안먹었어요!',
};

export const TREATS_OPTION = {
  ALL: '다 먹었어요!',
  NONE: '거의 안먹었어요!',
};

export const BATH_OPTION = {
  FULL_BATH: '전신목욕했어요',
  HALF_WIPE: '반만 닦았어요',
  PAW_WIPE: '발만 닦았어요',
};

export const verificationOption = 'verificationOption';
