import { GENDER } from '../../shared/constants/pet';
import type {
  VerificationCount,
  VerificationForSlide,
  VerificationsForCalendar,
  VerificationsFroGrid,
  VerificationsForGridByUploader,
} from '../../shared/types/verification';
import petMockImageUrl1 from './mock1.jpeg';
import petMockImageUrl2 from './mock4.jpeg';
import petMockImageUrl3 from './mock5.jpeg';
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
) => VerificationForSlide = (currentPage: number) => {
  const totalPages = 3;
  const pageSize = 10;
  const totalItems = 28;

  switch (currentPage) {
    case 0:
      return {
        currentPage: 0,
        totalPages,
        totalItems,
        pageSize,
        items: [
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
        ],
      };
    case 1:
      return {
        currentPage: 1,
        totalPages,
        totalItems,
        pageSize,
        items: [
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

export const verificationsForGridData: (
  currentPage: number
) => VerificationsFroGrid = (currentPage) => {
  const pageSize = 30;
  const totalItems = 90;
  const totalPages = Math.ceil(totalItems / pageSize);

  switch (currentPage) {
    case 0:
      return {
        currentPage: 0,
        totalPages,
        totalItems,
        pageSize,
        items: [
          {
            id: '0',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '1',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '2',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '3',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '4',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '5',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '6',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '7',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '8',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '9',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '10',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '11',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '12',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '13',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '14',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '15',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '16',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '17',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '18',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '19',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '20',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '21',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '22',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '23',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '24',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '25',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '26',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '27',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '28',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '29',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
        ],
      };
    case 1:
      return {
        currentPage: 1,
        totalPages,
        totalItems,
        pageSize,
        items: [
          {
            id: '30',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl2,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '31',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '32',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '33',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '34',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl2,
              name: '둘째딸',
            },
          },
          {
            id: '35',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl2,
              name: '둘째딸',
            },
          },
          {
            id: '36',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '37',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '38',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '39',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '40',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '41',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '42',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '43',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '44',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '45',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '46',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '47',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '48',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '49',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '50',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '51',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '52',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '53',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '54',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '55',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '56',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '57',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '58',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '59',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '60',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl2,
              name: '둘째딸',
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
            id: '0a',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '1a',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '2a',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '3a',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '4a',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '5a',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '6a',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '7a',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '8a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '9a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '10a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '11a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '12a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '13a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '14a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '15a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '16a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '17a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '18a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '19a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '20a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '21a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '22a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '23a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '24a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '25a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '26a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '27a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '28a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '29a',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl1,
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
            id: '30b',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl2,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '31b',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '32b',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '33b',
            createdAt: '2024-04-21T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '34b',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl2,
              name: '둘째딸',
            },
          },
          {
            id: '35b',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl1,
            author: {
              id: '1',
              imageUrl: userMockImageUrl2,
              name: '둘째딸',
            },
          },
          {
            id: '36b',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '37b',
            createdAt: '2024-04-20T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '2',
              imageUrl: userMockImageUrl2,
              name: '막둥이',
            },
          },
          {
            id: '38b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '39b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '40b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '41b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '42b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '43b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '44b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '45b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '46b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '47b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '48b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '49b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '50b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '51b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '52b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '53b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '54b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '55b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '56b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '57b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '58b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '59b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl1,
              name: '둘째딸',
            },
          },
          {
            id: '60b',
            createdAt: '2024-04-19T12:00:00Z',
            imageUrl: petMockImageUrl3,
            author: {
              id: '1',
              imageUrl: userMockImageUrl2,
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

export const UploaderTypeVerificationsForGridData: VerificationsForGridByUploader[] =
  [
    {
      author: {
        id: '1',
        imageUrl: userMockImageUrl1,
        name: '둘쨰딸',
      },
      items: [
        {
          id: '0',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl2,
        },
        {
          id: '1',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl2,
        },
        {
          id: '2',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl2,
        },
        {
          id: '3',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl2,
        },
        {
          id: '4',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl2,
        },
        {
          id: '5',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl2,
        },
        {
          id: '6',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl2,
        },
        {
          id: '7',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl2,
        },
      ],
    },
    {
      author: {
        id: '2',
        imageUrl: userMockImageUrl2,
        name: '막둥이',
      },
      items: [
        {
          id: '0',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl3,
        },
        {
          id: '1',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl3,
        },
        {
          id: '2',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl3,
        },
        {
          id: '3',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl3,
        },
        {
          id: '4',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl3,
        },
        {
          id: '5',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl3,
        },
        {
          id: '6',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl3,
        },
        {
          id: '7',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl3,
        },
      ],
    },
    {
      author: {
        id: '3',
        imageUrl: '',
        name: '엄마',
      },
      items: [
        {
          id: '0',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '1',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '2',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '3',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '4',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '5',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '6',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '7',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
      ],
    },
    {
      author: {
        id: '4',
        imageUrl: '',
        name: '큰언니',
      },
      items: [
        {
          id: '0',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '1',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '2',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '3',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '4',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '5',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '6',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl2,
        },
        {
          id: '7',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
      ],
    },
    {
      author: {
        id: '5',
        imageUrl: '',
        name: '아빠',
      },
      items: [
        {
          id: '0',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '1',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '2',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '3',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '4',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '5',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '6',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
        {
          id: '7',
          createdAt: '2024-04-21T12:00:00Z',
          imageUrl: petMockImageUrl1,
        },
      ],
    },
  ];

export const detailVerificationData = {
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
};
