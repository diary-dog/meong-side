import { useSuspenseQuery } from '@tanstack/react-query';

import { verificationKey } from '../../../shared/lib/query/queryKey';
import verificationAPI from './verificationAPI';

const useVerificationCount = ({ petId }: { petId: string }) => {
  return useSuspenseQuery({
    queryKey: verificationKey.pet(petId),
    queryFn: () => verificationAPI.getVerificationCount(petId),
  });
};
export default useVerificationCount;
