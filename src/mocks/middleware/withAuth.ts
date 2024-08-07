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
    const { request } = input;
    const accessToken = request.headers.get('Authorization');
    if (!accessToken) {
      return new HttpResponse('Authorization', { status: 401 });
    }

    return resolver(input);
  };
};

export default withAuth;
