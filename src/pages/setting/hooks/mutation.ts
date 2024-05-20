import { useMutation } from '@tanstack/react-query';

import queryClient from '../../../utils/query/queryClient';
import { userKey } from '../../../utils/query/queryKey';
import userAPI from '../../../api/userAPI';

const useInviteMember = () => {
  return useMutation({
    mutationFn: userAPI.inviteMemberToFamily,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKey.base,
      });
    },
    onError: (error) => console.error(error),
  });
};
export default useInviteMember;
