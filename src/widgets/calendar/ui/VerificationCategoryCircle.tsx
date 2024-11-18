import { VerificationCategoryType } from '../../../entities/verification/constants';
import { VerificationByDate } from '../../../entities/verification/verification.dto';

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
