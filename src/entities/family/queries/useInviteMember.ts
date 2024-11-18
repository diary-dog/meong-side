import { useMutation } from '@tanstack/react-query';
import { userKey } from '../../../shared/lib/query/queryKey';
import queryClient from '../../../shared/lib/query/queryClient';
import familyAPI from '../api/familyAPI';

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
