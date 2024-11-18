import { useMutation } from '@tanstack/react-query';

import familyAPI from '../api/familyAPI';
import queryClient from '@/shared/lib/query/queryClient';
import { userKey } from '@/shared/lib/query/queryKey';

const useInviteMember = () => {
  return useMutation({
    mutationFn: familyAPI.inviteMemberToFamily,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKey.base,
      });
    },
    onError: (error) => console.error(error),
  });
};
export default useInviteMember;
