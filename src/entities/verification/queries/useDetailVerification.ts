import { useSuspenseQuery } from '@tanstack/react-query';

import verificationAPI from '../api/verificationAPI';
import { verificationKey } from '@/shared/lib/query/queryKey';

const useDetailVerification = ({
  verificationId,
}: {
  verificationId: string;
}) => {
  return useSuspenseQuery({
    queryKey: verificationKey.verification(verificationId),
    queryFn: () => verificationAPI.getDetailVerification(verificationId),
  });
};
export default useDetailVerification;
