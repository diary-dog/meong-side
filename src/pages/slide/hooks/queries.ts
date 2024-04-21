import { useSuspenseQuery } from '@tanstack/react-query';

import { verificationKey } from '../../../utils/query/queryKey';
import verificationAPI from '../../../api/verificationAPI';

const useVerificationForSlide = ({ currentPage }: { currentPage: number }) => {
  const { data } = useSuspenseQuery({
    queryKey: verificationKey.slide(),
    queryFn: () => verificationAPI.getVerificationForSlide({ currentPage }),
  });
  console.log(data);
  return data;
};

export default useVerificationForSlide;
