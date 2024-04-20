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
                    id: '1',
                    verificationOption: '1시간 10분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    id: '2',
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
                    id: '3',
                    verificationOption: '다 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '4',
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '5',
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
                    id: '6',
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
                    id: '7',
                    verificationOption: '1시간 10분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    id: '8',
                    verificationOption: '20분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    id: '9',
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
                    id: '10',
                    verificationOption: '다 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '11',
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '12',
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
                    id: '13',
                    verificationOption: '비스킷',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '14',
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
                    id: '15',
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
                    id: '16',
                    verificationOption: '1시간 10분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    id: '17',
                    verificationOption: '20분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    id: '18',
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
                    id: '19',
                    verificationOption: '다 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '20',
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '21',
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
                    id: '22',
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
                    id: '23',
                    verificationOption: '1시간 10분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    id: '24',
                    verificationOption: '20분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    id: '25',
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
                    id: '26',
                    verificationOption: '다 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '27',
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '28',
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
                    id: '29',
                    verificationOption: '비스킷',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '30',
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
                    id: '31',
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
                    id: '32',
                    verificationOption: '1시간 10분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    id: '33',
                    verificationOption: '20분',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl1,
                      name: '둘쨰딸',
                    },
                  },
                  {
                    id: '34',
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
                    id: '35',
                    verificationOption: '다 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '36',
                    verificationOption: '반만 먹었어요!',
                    createdAt: new Date(),
                    author: {
                      id: '1',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '37',
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
                    id: '38',
                    verificationOption: '비스킷',
                    createdAt: new Date(),
                    author: {
                      id: '2',
                      imageUrl: userMockImageUrl2,
                      name: '막둥이',
                    },
                  },
                  {
                    id: '39',
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
                    id: '40',
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
