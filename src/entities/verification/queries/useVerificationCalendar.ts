import { useSuspenseQuery } from '@tanstack/react-query';
import verificationAPI from '../api/verificationAPI';
import { verificationKey } from '@/shared/lib/query/queryKey';

const useVerificationCalendar = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  const { data } = useSuspenseQuery({
    queryKey: verificationKey.calendar(),
    queryFn: () => verificationAPI.getVerificationCalendar({ year, month }),
  });
  return data;
};

export default useVerificationCalendar;
