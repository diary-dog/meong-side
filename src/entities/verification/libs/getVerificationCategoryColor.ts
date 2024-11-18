/* eslint-disable @typescript-eslint/ban-types */
import { THEME } from '../../../shared/styles/theme';
import { VERIFICATION, VerificationCategoryType } from '../constants';

export const getVerificationCategoryColor = (
  category: VerificationCategoryType | ({} & string)
) => {
  switch (category) {
    case VERIFICATION.WALK.type:
      return THEME.COLORS['P-BUTTON1'];
    case VERIFICATION.MEAL.type:
      return THEME.COLORS['P-BUTTON2'];
    case VERIFICATION.TREATS.type:
      return THEME.COLORS.DECO2;
    case VERIFICATION.BATH.type:
      return THEME.COLORS.DECO3;
    default:
      return THEME.COLORS['INACTIVE-BUTTON'];
  }
};

export const getVerificationCategoryTextColor = (
  category: VerificationCategoryType | ({} & string)
) => {
  switch (category) {
    case VERIFICATION.WALK.type:
      return 'white';
    case VERIFICATION.TREATS.type:
      return 'white';
    default:
      return 'black';
  }
};
