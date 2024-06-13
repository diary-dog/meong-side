import { useSuspenseQuery } from '@tanstack/react-query';
import { userKey } from '../../../shared/lib/query/queryKey';
import familyAPI from './familyAPI';

const useFamilyMembers = ({ petId }: { petId: string }) => {
  return useSuspenseQuery({
    queryKey: userKey.family(petId),
    queryFn: () => familyAPI.getFamilyMembers(petId),
  });
};
export default useFamilyMembers;
