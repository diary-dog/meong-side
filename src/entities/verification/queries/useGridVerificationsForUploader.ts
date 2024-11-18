import { useSuspenseQuery } from '@tanstack/react-query';

import verificationAPI from '../api/verificationAPI';
import { verificationKey } from '../../../shared/lib/query/queryKey';

const useGridVerificationsForUploader = () => {
  const { data } = useSuspenseQuery({
    queryKey: verificationKey.gridByUploader(),
    queryFn: () => verificationAPI.getVerificationByUploaderForGrid(),
  });
  return data;
};
export default useGridVerificationsForUploader;
