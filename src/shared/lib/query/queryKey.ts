import { SortType } from '../../types/verification';

export const verificationKey = {
  base: ['verification'] as const,
  pet: (petId: string) => [...verificationKey.base, petId] as const,
  verification: (verificationId: string) =>
    [...verificationKey.base, verificationId] as const,
  grid: () => [...verificationKey.base, 'grid'] as const,
  allGrid: (sort: SortType) =>
    [...verificationKey.grid(), 'all', sort] as const,
  gridByUploader: () => [...verificationKey.grid(), 'upload'] as const,
  uploaderGrid: (userId: string, sort: SortType) =>
    [...verificationKey.base, userId, sort] as const,
  slide: () => [...verificationKey.base, 'slide'] as const,
  calendar: () => [...verificationKey.base, 'calendar'] as const,
};

export const userKey = {
  base: ['user'],
  user: (userId: string) => [...userKey.base, userId] as const,
  family: (petId: string) => [...userKey.base, petId, 'family'] as const,
};
