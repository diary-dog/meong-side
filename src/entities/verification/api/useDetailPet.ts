import { useSuspenseQuery } from '@tanstack/react-query';

import { verificationKey } from '../../../shared/lib/query/queryKey';
import petAPI from './petAPI';

const useDetailPet = ({ petId }: { petId: string }) => {
  return useSuspenseQuery({
    queryKey: verificationKey.pet(petId),
    queryFn: () => petAPI.getDetailPet(petId),
  });
};
export default useDetailPet;
