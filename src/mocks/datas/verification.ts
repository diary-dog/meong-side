import { GENDER } from '../../constants/pet';
import type {
  VerificationCount,
  VerificationsForSlide,
  VerificationsForCalendar,
} from '../../types/verification';
import petMockImageUrl1 from './mock1.jpeg';
import petMockImageUrl2 from './mock4.jpeg';
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

export const verificationForSlideData: (
  currentPage: number
) => VerificationsForSlide = (currentPage: number) => {
  const totalPages = 3;
  const pageSize = 10;
  const totalItems = 28;

  switch (currentPage) {
    case 1:
      return {
        currentPage: 1,
        totalPages,
        totalItems,
        pageSize,
        items: [
          {
            id: '9',
            createdAt: '2024-04-19T12:00:00Z',
            category: 'meal',
            imageUrl: '',
            verificationOption: '반만 먹었어요',
            comment: '반만 먹었어요!',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '8',
            createdAt: '2024-04-19T12:00:00Z',
            category: 'treats',
            imageUrl: '',
            verificationOption: '건조간식',
            comment: '건조간식을 주었어요!',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '7',
            createdAt: '2024-04-20T12:00:00Z',
            category: 'bath',
            imageUrl: '',
            verificationOption: '',
            comment: '',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '6',
            createdAt: '2024-04-20T12:00:00Z',
            category: 'walk',
            imageUrl: '',
            verificationOption: '30분',
            comment: '',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '5',
            createdAt: '2024-04-20T12:00:00Z',
            category: 'daily',
            imageUrl: petMockImageUrl1,
            comment: '오늘도 행복한 하루!',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '4',
            createdAt: '2024-04-20T12:00:00Z',
            category: 'bath',
            imageUrl: '',
            verificationOption: '',
            comment: '',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '3',
            createdAt: '2024-04-21T12:00:00Z',
            category: 'treats',
            imageUrl: '',
            verificationOption: '',
            comment: '간식을 강아지껌으로 줬어요!',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '2',
            createdAt: '2024-04-21T12:00:00Z',
            category: 'meal',
            imageUrl: '',
            verificationOption: '다 먹었어요!',
            comment: '밥 다 먹었어요!',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '1',
            createdAt: '2024-04-21T12:00:00Z',
            category: 'walk',
            imageUrl: petMockImageUrl1,
            verificationOption: '1시간 10분',
            comment: '',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '0',
            createdAt: '2024-04-21T12:00:00Z',
            category: 'walk',
            imageUrl: petMockImageUrl2,
            verificationOption: '1시간 10분',
            comment:
              '왼쪽으로 가야되는데 오른쪽으로 간다고 개찡찡댔다... 다음타자 힘들듯^^',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
        ],
      };
    case 2:
      return {
        currentPage: 2,
        totalPages,
        totalItems,
        pageSize,
        items: [
          {
            id: '19',
            createdAt: '2024-04-14T12:00:00Z',
            category: 'treats',
            imageUrl: '',
            verificationOption: '건조간식',
            comment: '건조간식을 주었어요!',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '18',
            createdAt: '2024-04-15T12:00:00Z',
            category: 'bath',
            imageUrl: '',
            verificationOption: '',
            comment: '',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '17',
            createdAt: '2024-04-15T12:00:00Z',
            category: 'walk',
            imageUrl: '',
            verificationOption: '30분',
            comment: '',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '16',
            createdAt: '2024-04-16T12:00:00Z',
            category: 'daily',
            imageUrl: petMockImageUrl1,
            comment: '오늘도 행복한 하루!',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '15',
            createdAt: '2024-04-16T12:00:00Z',
            category: 'bath',
            imageUrl: '',
            verificationOption: '',
            comment: '',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '14',
            createdAt: '2024-04-16T12:00:00Z',
            category: 'treats',
            imageUrl: '',
            verificationOption: '',
            comment: '간식을 강아지껌으로 줬어요!',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '13',
            createdAt: '2024-04-17T12:00:00Z',
            category: 'meal',
            imageUrl: '',
            verificationOption: '다 먹었어요!',
            comment: '밥 다 먹었어요!',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '12',
            createdAt: '2024-04-17T12:00:00Z',
            category: 'walk',
            imageUrl: petMockImageUrl1,
            verificationOption: '1시간 10분',
            comment: '',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '11',
            createdAt: '2024-04-18T12:00:00Z',
            category: 'walk',
            imageUrl: petMockImageUrl2,
            verificationOption: '1시간 10분',
            comment:
              '왼쪽으로 가야되는데 오른쪽으로 간다고 개찡찡댔다... 다음타자 힘들듯^^',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '10',
            createdAt: '2024-04-19T12:00:00Z',
            category: 'daily',
            imageUrl: petMockImageUrl1,
            verificationOption: '',
            comment: '',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
        ],
      };
    case 3:
      return {
        currentPage: 3,
        totalPages,
        totalItems,
        pageSize,
        items: [
          {
            id: '27',
            createdAt: '2024-04-11T12:00:00Z',
            category: 'bath',
            imageUrl: '',
            verificationOption: '',
            comment: '',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '26',
            createdAt: '2024-04-11T12:00:00Z',
            category: 'walk',
            imageUrl: '',
            verificationOption: '30분',
            comment: '',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '25',
            createdAt: '2024-04-12T12:00:00Z',
            category: 'daily',
            imageUrl: petMockImageUrl1,
            comment: '오늘도 행복한 하루!',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '24',
            createdAt: '2024-04-12T12:00:00Z',
            category: 'bath',
            imageUrl: '',
            verificationOption: '',
            comment: '',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '23',
            createdAt: '2024-04-12T12:00:00Z',
            category: 'treats',
            imageUrl: '',
            verificationOption: '',
            comment: '간식을 강아지껌으로 줬어요!',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '22',
            createdAt: '2024-04-13T12:00:00Z',
            category: 'meal',
            imageUrl: '',
            verificationOption: '다 먹었어요!',
            comment: '밥 다 먹었어요!',
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '21',
            createdAt: '2024-04-13T12:00:00Z',
            category: 'daily',
            imageUrl: petMockImageUrl1,
            verificationOption: '',
            comment: '',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '20',
            createdAt: '2024-04-13T12:00:00Z',
            category: 'meal',
            imageUrl: '',
            verificationOption: '반만 먹었어요',
            comment: '반만 먹었어요!',
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
        ],
      };
    default:
      return {
        currentPage,
        totalPages,
        totalItems,
        pageSize,
        items: [],
      };
  }
};
