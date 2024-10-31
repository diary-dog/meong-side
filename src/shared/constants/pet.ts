export const GENDER = {
  MALE: 'M',
  FEMALE: 'F',
} as const;

export type GENDER_TYPE = (typeof GENDER)[keyof typeof GENDER];
