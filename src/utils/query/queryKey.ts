import { SortType } from '../../types/verification';

export const verificationKey = {
  base: ['verification'] as const,
  pet: (petId: number) => [...verificationKey.base, petId] as const,
  grid: () => [...verificationKey.base, 'grid'] as const,
  allGrid: (sort: SortType) =>
    [...verificationKey.grid(), 'all', sort] as const,
  gridByUploader: () => [...verificationKey.grid(), 'upload'] as const,
  uploaderGrid: (userId: string, sort: SortType) =>
    [...verificationKey.base, userId, sort] as const,
  slide: () => [...verificationKey.base, 'slide'] as const,
  calendar: () => [...verificationKey.base, 'calendar'] as const,
};
