import {
  DefaultBodyType,
  HttpResponse,
  HttpResponseResolver,
  PathParams,
} from 'msw';

const withAuth = (
  resolver: HttpResponseResolver<PathParams, DefaultBodyType, undefined>
): HttpResponseResolver<PathParams, DefaultBodyType, undefined> => {
  return async (input) => {
    const { cookies } = input;
    if (!cookies.access_token) {
      return new HttpResponse('Authorization', { status: 401 });
    }

    return resolver(input);
  };
};

export default withAuth;
