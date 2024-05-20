import { useSuspenseQuery } from '@tanstack/react-query';

import { userKey } from '../../../utils/query/queryKey';
import userAPI from '../../../api/userAPI';

export const useFamilyMembers = ({ petId }: { petId: string }) => {
  return useSuspenseQuery({
    queryKey: userKey.family(petId),
    queryFn: () => userAPI.getFamilyMembers(petId),
  });
};
