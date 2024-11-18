import apiClient from '@/shared/api';
import { END_POINT } from '@/shared/constants/endPoint';
import { Family } from '../family.dto';

const familyAPI = {
  /** get family members */
  getFamilyMembers: async (petId: string) => {
    const { data } = await apiClient.get<Family>(END_POINT.FAMILY(petId));
    return data;
  },
  /** invite member to family */
  inviteMemberToFamily: async ({
    petId,
    email,
  }: {
    petId: string;
    email: string;
  }) => {
    const { data } = await apiClient.post(END_POINT.INVITE_MEMBER(petId), {
      email,
    });
    return data;
  },
};

export default familyAPI;
