import { ReactNode, useEffect } from 'react';

import { useUserStore } from '@/app/model/useUserStore';
import { useLoggedInUserQuery } from '@/entities/user/queries/useLoggedInUserQuery';
import Spinner from '@/widgets/common/Spinner';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useLoggedInUserQuery();
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const setLoggedInUser = useUserStore((state) => state.setLoggedInUser);

  useEffect(() => {
    if (data && !loggedInUser) {
      setLoggedInUser(data);
    }
  }, [data, loggedInUser, setLoggedInUser]);

  if (isLoading) {
    return <Spinner />;
  }

  return children;
};

export default AuthProvider;
