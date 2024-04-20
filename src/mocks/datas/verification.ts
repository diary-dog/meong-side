import { GENDER } from '../../constants/pet';
import type {
  VerificationCount,
  VerificationsForCalendar,
} from '../../types/verification';
import petMockImageUrl1 from './mock1.jpeg';
import userMockImageUrl1 from './mock2.jpeg';
import userMockImageUrl2 from './mock3.jpeg';

export const verificationCountInfo: VerificationCount = {
  name: '월이',
  birthYear: 2019,
  gender: GENDER.MALE,
  imageUrl: petMockImageUrl1,
  verification: {
    mealCount: 2,
    walkCount: 3,
    bathCount: 4,
    treatsCount: 6,
  },
};

export const verificationsForCalendarData: ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => VerificationsForCalendar | undefined = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) =>
  year == 2024 && month == month
    ? {
        year: 2024,
        month: 4,
        dates: [
          {
            date: '2024-04-02',
            verifications: [
              {
                category: 'walk',
                verificationCount: 2,
                verificationDetails: [
                  {
                    verificationOption: '1시간 10분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    verificationOption: '20분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                ],
              },
              {
                category: 'meal',
                verificationCount: 3,
                verificationDetails: [
                  {
                    verificationOption: '다 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl1,
                      name: '막둥이',
                    },
                  },
                ],
              },
              {
                category: 'bath',
                verificationCount: 1,
                verificationDetails: [
                  {
                    verificationOption: '발만 닦았어요',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                ],
              },
            ],
          },
          {
            date: '2024-04-03',
            verifications: [
              {
                category: 'walk',
                verificationCount: 3,
                verificationDetails: [
                  {
                    verificationOption: '1시간 10분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    verificationOption: '20분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    verificationOption: '',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                ],
              },
              {
                category: 'meal',
                verificationCount: 3,
                verificationDetails: [
                  {
                    verificationOption: '다 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl1,
                      name: '막둥이',
                    },
                  },
                ],
              },
              {
                category: 'treats',
                verificationCount: 2,
                verificationDetails: [
                  {
                    verificationOption: '비스킷',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                ],
              },
              {
                category: 'bath',
                verificationCount: 1,
                verificationDetails: [
                  {
                    verificationOption: '발만 닦았어요',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                ],
              },
            ],
          },
          {
            date: '2024-04-04',
            verifications: [
              {
                category: 'walk',
                verificationCount: 3,
                verificationDetails: [
                  {
                    verificationOption: '1시간 10분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    verificationOption: '20분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    verificationOption: '',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                ],
              },
              {
                category: 'meal',
                verificationCount: 3,
                verificationDetails: [
                  {
                    verificationOption: '다 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl1,
                      name: '막둥이',
                    },
                  },
                ],
              },
              {
                category: 'bath',
                verificationCount: 1,
                verificationDetails: [
                  {
                    verificationOption: '발만 닦았어요',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                ],
              },
            ],
          },
          {
            date: '2024-04-20',
            verifications: [
              {
                category: 'walk',
                verificationCount: 3,
                verificationDetails: [
                  {
                    verificationOption: '1시간 10분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    verificationOption: '20분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    verificationOption: '',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                ],
              },
              {
                category: 'meal',
                verificationCount: 3,
                verificationDetails: [
                  {
                    verificationOption: '다 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl1,
                      name: '막둥이',
                    },
                  },
                ],
              },
              {
                category: 'treats',
                verificationCount: 2,
                verificationDetails: [
                  {
                    verificationOption: '비스킷',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                ],
              },
              {
                category: 'bath',
                verificationCount: 1,
                verificationDetails: [
                  {
                    verificationOption: '발만 닦았어요',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                ],
              },
            ],
          },
          {
            date: '2024-04-20',
            verifications: [
              {
                category: 'walk',
                verificationCount: 3,
                verificationDetails: [
                  {
                    verificationOption: '1시간 10분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    verificationOption: '20분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    verificationOption: '',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                ],
              },
              {
                category: 'meal',
                verificationCount: 3,
                verificationDetails: [
                  {
                    verificationOption: '다 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl1,
                      name: '막둥이',
                    },
                  },
                ],
              },
              {
                category: 'treats',
                verificationCount: 2,
                verificationDetails: [
                  {
                    verificationOption: '비스킷',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    verificationOption: '',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                ],
              },
              {
                category: 'bath',
                verificationCount: 1,
                verificationDetails: [
                  {
                    verificationOption: '발만 닦았어요',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                ],
              },
            ],
          },
        ],
      }
    : undefined;
