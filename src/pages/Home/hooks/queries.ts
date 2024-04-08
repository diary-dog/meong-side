import { useQuery } from '@tanstack/react-query';

import { verificationKey } from '../../../utils/query/queryKey';
import { getVerificationCount } from '../../../api/getVerificationCount';

export const useVerificationCount = ({ petId }: { petId: number }) => {
  return useQuery({
    queryKey: verificationKey.pet(petId),
    queryFn: () => getVerificationCount(petId),
  });
};
