import { useSuspenseQuery } from '@tanstack/react-query';

import petAPI from '../api/petAPI';
import { verificationKey } from '@/shared/lib/query/queryKey';

const useDetailPet = ({ petId }: { petId: string }) => {
  return useSuspenseQuery({
    queryKey: verificationKey.pet(petId),
    queryFn: () => petAPI.getDetailPet(petId),
  });
};
export default useDetailPet;
