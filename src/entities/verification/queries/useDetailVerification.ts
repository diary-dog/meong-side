import { useSuspenseQuery } from '@tanstack/react-query';

import { verificationKey } from '../../../shared/lib/query/queryKey';
import verificationAPI from '../api/verificationAPI';

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
