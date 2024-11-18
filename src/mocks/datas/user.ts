import { Family } from '@/entities/family/family.dto';
import userMockImageUrl1 from './mock2.jpeg';
import userMockImageUrl2 from './mock3.jpeg';
import userMockImageUrl3 from './mock6.jpeg';
import userMockImageUrl4 from './mock7.jpeg';

export const familyMembersData: Family = {
  manager: {
    id: '1',
    imageUrl: userMockImageUrl1,
    name: '둘쨰딸',
  },
  members: [
    {
      id: '3',
      imageUrl: userMockImageUrl3,
      name: '큰언니',
    },
    {
      id: '2',
      imageUrl: userMockImageUrl2,
      name: '막둥이',
    },
    {
      id: '4',
      imageUrl: userMockImageUrl4,
      name: '엄마',
    },
  ],
};

export const familyEmptyMembersData: Family = {
  manager: {
    id: '1',
    imageUrl: userMockImageUrl1,
    name: '둘쨰딸',
  },
  members: [],
};
