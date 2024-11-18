import { Suspense } from 'react';

import Layout from '@/widgets/common/Layout';
import Spinner from '@/widgets/common/Spinner';
import { Calendar as VerificationCalendar } from '@/widgets/calendar';

import * as S from './CalendarPage.styled';

const CalendarPage = () => {
  return (
    <Layout top={{ title: '캘린더보기', backGroundColor: ' #f9f5f5' }}>
      <S.Container>
        <Suspense fallback={<Spinner size={50} />}>
          <VerificationCalendar>
            <VerificationCalendar.Header />
            <VerificationCalendar.Body />
            <VerificationCalendar.Footer />
          </VerificationCalendar>
        </Suspense>
      </S.Container>
    </Layout>
  );
};

export default CalendarPage;
