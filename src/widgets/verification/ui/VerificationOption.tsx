import {
  VERIFICATION,
  VERIFICATION_DETAILS,
} from '../../../shared/constants/verification';
import VerificationRadioOptions from './VerificationRadioOptions';

import * as S from './VerificationOption.styled';
import WalkDetailOption from './WalkDetailOption';

const VerificationOption = ({ category }: { category: string }) => {
  switch (category) {
    case VERIFICATION.WALK.value:
      return <WalkDetailOption />;
    case VERIFICATION.MEAL.value:
      return (
        <VerificationRadioOptions
          options={VERIFICATION_DETAILS.MEAL.map((option) => option)}
        />
      );
    case VERIFICATION.TREATS.value:
      return (
        <VerificationRadioOptions
          options={VERIFICATION_DETAILS.TREATS.map((option) => option)}
        />
      );
    case VERIFICATION.BATH.value:
      return (
        <VerificationRadioOptions
          options={VERIFICATION_DETAILS.BATH.map((option) => option)}
        />
      );
  }
  return <S.None></S.None>;
};

export default VerificationOption;
