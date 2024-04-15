import { THEME } from '../styles/theme';
import { VERIFICATION } from '../constants/verifications';

export const getVerificationTypeColor = (type: string) => {
  switch (type) {
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
