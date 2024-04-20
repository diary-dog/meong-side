import { VerificationCategoryType } from '../../../constants/verifications';
import { VerificationByDate } from '../../../types/verification';

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
