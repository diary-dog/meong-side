import { VerificationCategoryType } from '../../../shared/constants/verification';
import { VerificationByDate } from '../../../shared/types/verification';

import { CategoryCircle } from './CalendarBody.styled';

const VerificationCategoryCircle = ({
  verifications,
  category,
}: {
  verifications?: VerificationByDate[];
  category: VerificationCategoryType;
}) => (
  <CategoryCircle
    $category={
      verifications?.find((verification) => verification.category === category)
        ?.category
    }
  />
);
export default VerificationCategoryCircle;
