/* eslint-disable @typescript-eslint/ban-types */
import { THEME } from '../styles/theme';
import {
  VERIFICATION,
  VerificationCategoryType,
} from '../constants/verification';

export const getVerificationCategoryColor = (
  category: VerificationCategoryType | ({} & string)
) => {
  switch (category) {
    case VERIFICATION.WALK:
      return THEME.COLORS['P-BUTTON1'];
    case VERIFICATION.MEAL:
      return THEME.COLORS['P-BUTTON2'];
    case VERIFICATION.TREATS:
      return THEME.COLORS.DECO2;
    case VERIFICATION.BATH:
      return THEME.COLORS.DECO3;
    default:
      return THEME.COLORS['INACTIVE-BUTTON'];
  }
};

export const getVerificationCategoryTextColor = (
  category: VerificationCategoryType | ({} & string)
) => {
  switch (category) {
    case VERIFICATION.WALK:
      return 'white';
    case VERIFICATION.TREATS:
      return 'white';
    default:
      return 'black';
  }
};
