export const verificationKey = {
  base: ['verification'] as const,
  pet: (petId: number) => [...verificationKey.base, petId] as const,
  gird: (petId: number, filter: string) =>
    [...verificationKey.pet(petId), { filter }] as const,
  slide: (petId: number) => [...verificationKey.pet(petId), 'slide'] as const,
  calendar: () => [...verificationKey.base, 'calendar'] as const,
};
