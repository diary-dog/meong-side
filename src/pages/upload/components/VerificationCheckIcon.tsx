import { VERIFICATION } from '../../../constants/verifications';
import {
  CheckedBath,
  CheckedDog,
  CheckedMeal,
  CheckedTreats,
} from '../../../components/Icons';

const VerificationCheckIcon = ({ category }: { category: string }) => {
  switch (category) {
    case VERIFICATION.WALK:
      return <CheckedDog />;
    case VERIFICATION.MEAL:
      return <CheckedMeal />;
    case VERIFICATION.TREATS:
      return <CheckedTreats />;
    case VERIFICATION.BATH:
      return <CheckedBath />;
    default:
      <></>;
  }
};

export default VerificationCheckIcon;
