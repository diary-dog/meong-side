import apiClient from '.';
import { END_POINT } from '../constants/endPoint';

export const getVerificationCount = async (petId: number) => {
  const response = await apiClient.get(END_POINT.HOME(petId));
  return response.data;
};
