import { useQuery } from '@tanstack/react-query';

import { userKey } from '@/shared/lib/query/queryKey';
import userAPI from '../api/userAPI';
import queryClient from '@/shared/lib/query/queryClient';
import { tokenStorage } from '@/shared/lib/tokenStorage';

export const useLoggedInUserQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: userKey.user(),
    queryFn: userAPI.getLoggedInUser,
    enabled: !!tokenStorage.getToken(),
  });
  return { data: data?.data, error, isLoading };
};

export const prefetchQueryLoggedInUser = () => {
  return queryClient.prefetchQuery({
    queryKey: userKey.user(),
    queryFn: userAPI.getLoggedInUser,
  });
};
