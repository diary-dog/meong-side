export interface Pet {
  petId: number;
  name: string;
  bonsOfYear: number;
  imageUrl: string;
  gender: '남아' | '여아';
  walkCount: number;
  mealCount: number;
  bathCount: number;
  treatsCount: number;
}

export const pet: Pet = {
  petId: 1,
  name: '월이',
  bonsOfYear: 2019,
  imageUrl: '',
  gender: '남아',
  walkCount: 2,
  mealCount: 3,
  treatsCount: 1,
  bathCount: 0,
};
export interface User {
  userId: string;
  userImage: string;
  nickname: string;
}
export interface Data {
  createdAt: number;
  category?: string;
  imageUrl: string;
  contents?: string;
  option?: string;
  user?: User;
}
export const mockData: Data[] = [
  {
    createdAt: Number(new Date()) + 1,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__',
  },
  {
    createdAt: Number(new Date()) + 2,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 3,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 4,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 5,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 6,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 7,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 8,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 9,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 10,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 11,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 12,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 13,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 14,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 15,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 16,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 17,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 18,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 19,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 20,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 21,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 22,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 23,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 24,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 25,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 26,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 27,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 28,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 29,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 30,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 31,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
  {
    createdAt: Number(new Date()) + 32,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c8e2/5de9/773005806d860073ab0aff198277fbe0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYaMzYM1tPHQhGSVz1NmPMM3QS3~dZbO66wgw0Neu27~5mmvZJzhqODaJunB1v15QlKEfFLtSXkuDH~PWfRkOJ4TgieULhPI7RawK3325wPsng4s-fjF2hBWM2vmQo6Fn8VgUKT8PSdXTky9rU-HFtKW0U9xgz9hzyohCJJgqQ9ZTfVo5jEoXB85OKlCvE3ymbBce2zGLSPCuF4NF6SjAIl~2DCXDM3RQy3XMyKwFic0S2Vso66TdlPvHQMDZpy0G96xh6IWzlhBoI-C~p7r2rBZNWVbIDUH-A1z1el~rokROyG7bqsk-v5hUDaf-HKZD7e0b5LX9v7FiLxanVwhrQ__',
  },
];
export interface SlidData {
  createdAt: string;
  category: string;
  imageUrl: string;
  contents: string;
  option: string;
  user: {
    userId: string;
    userImage: string;
    nickname: string;
  };
}
export const slideMockData: SlidData[] = [
  {
    createdAt: '22222229',
    category: '산책 인증',
    option: '1시간 10분',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__',
    contents: '',
    user: {
      userId: '0',
      userImage:
        'https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__',
      nickname: '둘째딸',
    },
  },
  {
    createdAt: '22222228',
    category: '산책 인증',
    option: '1시간 10분',
    imageUrl: '',
    contents: '',
    user: {
      userId: '1',
      userImage:
        'https://s3-alpha-sig.figma.com/img/e086/970b/bfb65c790c7136f50ef8c25630f1a4c2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9xmGXyVn1Q8UrnF4EwhbwUFlzDxZWJOGNAtrMZ9LvdBD0iqJLhTphIwRrHkjJ9J14tyKoTSflnO2ekJ3WiEolzq-4OP7f6DPVPVZgJFeq4k1lnneEgj~ZUb0Zj3QPB0BSQz5zKzjWRn4cvyJRlMUHGiDeOVs2dcFarZs945s0adQyo2nOEbX9f9mc0N~1yQty3JUxghVadcnIbovXv8FXgAx8E57XnDGTcCPbaV9lnwaf82JeKwp6jA9P4Obh2o~f6Y-CqSMOjJpZU9sLMqajytw49eUa3NXGWrIlR7Bl01189GMRO221IsgzvZ1aFSMC~-otmax86POBHZYodMyg__',
      nickname: '막둥이',
    },
  },
  {
    createdAt: '22222227',
    category: '간식 인증',
    option: '뼈다귀',
    imageUrl: '',
    contents: '개껌 두개나 먹었는데 더달라고 쳐다봄ㅋㅋㅋㅋ 적당히 줘야될 듯!',
    user: {
      userId: '1',
      userImage:
        'https://s3-alpha-sig.figma.com/img/e086/970b/bfb65c790c7136f50ef8c25630f1a4c2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9xmGXyVn1Q8UrnF4EwhbwUFlzDxZWJOGNAtrMZ9LvdBD0iqJLhTphIwRrHkjJ9J14tyKoTSflnO2ekJ3WiEolzq-4OP7f6DPVPVZgJFeq4k1lnneEgj~ZUb0Zj3QPB0BSQz5zKzjWRn4cvyJRlMUHGiDeOVs2dcFarZs945s0adQyo2nOEbX9f9mc0N~1yQty3JUxghVadcnIbovXv8FXgAx8E57XnDGTcCPbaV9lnwaf82JeKwp6jA9P4Obh2o~f6Y-CqSMOjJpZU9sLMqajytw49eUa3NXGWrIlR7Bl01189GMRO221IsgzvZ1aFSMC~-otmax86POBHZYodMyg__',
      nickname: '막둥이',
    },
  },
  {
    createdAt: '22222226',
    category: '산책 인증',
    option: '',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__',
    contents:
      '왼쪽으로 가야되는데 오른쪽으로 간다고 개찡찡댔다... 다음타자 힘들듯^^',
    user: {
      userId: '0',
      userImage:
        'https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__',
      nickname: '둘째딸',
    },
  },
  {
    createdAt: '22222225',
    category: '산책 인증',
    option: '개껌',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__',
    contents: '',
    user: {
      userId: '1',
      userImage:
        'https://s3-alpha-sig.figma.com/img/e086/970b/bfb65c790c7136f50ef8c25630f1a4c2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9xmGXyVn1Q8UrnF4EwhbwUFlzDxZWJOGNAtrMZ9LvdBD0iqJLhTphIwRrHkjJ9J14tyKoTSflnO2ekJ3WiEolzq-4OP7f6DPVPVZgJFeq4k1lnneEgj~ZUb0Zj3QPB0BSQz5zKzjWRn4cvyJRlMUHGiDeOVs2dcFarZs945s0adQyo2nOEbX9f9mc0N~1yQty3JUxghVadcnIbovXv8FXgAx8E57XnDGTcCPbaV9lnwaf82JeKwp6jA9P4Obh2o~f6Y-CqSMOjJpZU9sLMqajytw49eUa3NXGWrIlR7Bl01189GMRO221IsgzvZ1aFSMC~-otmax86POBHZYodMyg__',
      nickname: '막둥이',
    },
  },
  {
    createdAt: '22222224',
    category: '산책 인증',
    option: '',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__',
    contents: '',
    user: {
      userId: '0',
      userImage:
        'https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__',
      nickname: '둘째딸',
    },
  },
  {
    createdAt: '22222223',
    category: '산책 인증',
    option: '1시간 10분',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__',
    contents: '',
    user: {
      userId: '1',
      userImage:
        'https://s3-alpha-sig.figma.com/img/e086/970b/bfb65c790c7136f50ef8c25630f1a4c2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9xmGXyVn1Q8UrnF4EwhbwUFlzDxZWJOGNAtrMZ9LvdBD0iqJLhTphIwRrHkjJ9J14tyKoTSflnO2ekJ3WiEolzq-4OP7f6DPVPVZgJFeq4k1lnneEgj~ZUb0Zj3QPB0BSQz5zKzjWRn4cvyJRlMUHGiDeOVs2dcFarZs945s0adQyo2nOEbX9f9mc0N~1yQty3JUxghVadcnIbovXv8FXgAx8E57XnDGTcCPbaV9lnwaf82JeKwp6jA9P4Obh2o~f6Y-CqSMOjJpZU9sLMqajytw49eUa3NXGWrIlR7Bl01189GMRO221IsgzvZ1aFSMC~-otmax86POBHZYodMyg__',
      nickname: '막둥이',
    },
  },
];

export const familyMockData = slideMockData.map((user) => user.user);
