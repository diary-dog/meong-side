import { useMutation } from '@tanstack/react-query';

import verificationAPI from './verificationAPI';
import queryClient from '../../../shared/lib/query/queryClient';
import { verificationKey } from '../../../shared/lib/query/queryKey';

const useUploadVerification = () => {
  return useMutation({
    mutationFn: verificationAPI.postVerification,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: verificationKey.base,
      });
    },
    onError: (error) => console.error(error),
  });
};
export default useUploadVerification;
