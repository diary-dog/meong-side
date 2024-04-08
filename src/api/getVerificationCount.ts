import apiClient from '.';

export const getVerificationCount = async (petId: number) => {
  const response = await apiClient.get(`/verification/${petId}`);
  return response.data;
};
