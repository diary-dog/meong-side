export const GENDER = {
  MALE: '남',
  FEMALE: '여',
} as const;

export type GENDER_TYPE = (typeof GENDER)[keyof typeof GENDER];
