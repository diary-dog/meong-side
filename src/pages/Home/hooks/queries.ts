import { useQuery } from '@tanstack/react-query';

import { verificationKey } from '../../../utils/query/queryKey';
import verificationAPI from '../../../api/verificationAPI';

export const useVerificationCount = ({ petId }: { petId: string }) => {
  return useQuery({
    queryKey: verificationKey.pet(petId),
    queryFn: () => verificationAPI.getVerificationCount(petId),
  });
};
