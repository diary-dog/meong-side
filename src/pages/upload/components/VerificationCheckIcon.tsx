import { VERIFICATION } from '../../../utils/constants';
import {
  CheckedBath,
  CheckedDog,
  CheckedMeal,
  CheckedTreat,
} from '../../../components/Icons';

const VerificationCheckIcon = ({ type }: { type: string }) => {
  switch (type) {
    case VERIFICATION.WALK:
      return <CheckedDog />;
    case VERIFICATION.MEAL:
      return <CheckedMeal />;
    case VERIFICATION.TREAT:
      return <CheckedTreat />;
    case VERIFICATION.BATH:
      return <CheckedBath />;
    default:
      <></>;
  }
};

export default VerificationCheckIcon;
