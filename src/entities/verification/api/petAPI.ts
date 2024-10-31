import { END_POINT } from '../../../shared/constants/endPoint';
import apiClient from '../../../shared/api';
import { Pet } from '../../../shared/types/pet';
import { Response } from '../../../shared/types';

const petAPI = {
  /** pet detail info 조회 */
  getDetailPet: async (petId: string) => {
    const { data } = await apiClient.get<Response<Pet>>(
      END_POINT.PETS.DETAIL(petId)
    );
    return data;
  },
};

export default petAPI;
