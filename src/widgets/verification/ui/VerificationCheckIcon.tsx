import { VERIFICATION } from '@/entities/verification/constants';
import {
  CheckedBath,
  CheckedDog,
  CheckedMeal,
  CheckedTreats,
} from '@/shared/ui/Icons';

const VerificationCheckIcon = ({ category }: { category: string }) => {
  switch (category) {
    case VERIFICATION.WALK.value:
      return <CheckedDog />;
    case VERIFICATION.MEAL.value:
      return <CheckedMeal />;
    case VERIFICATION.TREATS.value:
      return <CheckedTreats />;
    case VERIFICATION.BATH.value:
      return <CheckedBath />;
    default:
      <></>;
  }
};

export default VerificationCheckIcon;
