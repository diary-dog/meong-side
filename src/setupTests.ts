import { afterEach, beforeAll, afterAll } from 'vitest';
import { server } from './mocks/node';

// 모든 테스트가 실행되기 전에 서버를 시작합니다.
// onUnhandledRequest 옵션을 'error'로 설정하여 처리되지 않은 요청이 발생하면 에러를 던지도록 합니다.
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

// 모든 테스트가 끝난 후 서버를 종료합니다.
afterAll(() => {
  server.close();
});

// 각 테스트가 끝난 후 서버 핸들러를 리셋하여 테스트 간의 격리를 보장합니다.
afterEach(() => {
  server.resetHandlers();
});
