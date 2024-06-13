import { useMutation } from '@tanstack/react-query';
import familyAPI from './familyAPI';
import { userKey } from '../../../shared/lib/query/queryKey';
import queryClient from '../../../shared/lib/query/queryClient';

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
