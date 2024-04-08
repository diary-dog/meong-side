// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';

const verifications = [
  {
    petId: 1,
    petName: '월이',
    bornOfYear: 2019,
    gender: '남',
    mealCount: 2,
    walkCount: 3,
    bathCount: 4,
    survivalCount: 5,
    treatsCount: 6,
  },
];

export const handlers = [
  http.get('/verification/:petId', ({ params }) => {
    const { petId } = params;
    const verification = verifications.find(
      (pet) => pet.petId === Number(petId)
    );
    return HttpResponse.json(
      { verification },
      {
        status: 200,
      }
    );
  }),
];
