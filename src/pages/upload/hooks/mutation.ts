import { useMutation } from '@tanstack/react-query';

import verificationAPI from '../../../api/verificationAPI';
import queryClient from '../../../utils/query/queryClient';
import { verificationKey } from '../../../utils/query/queryKey';

export const useUploadVerification = () => {
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
