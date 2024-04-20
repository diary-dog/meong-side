import { Suspense } from 'react';
import { Layout, VerificationCalendar } from '../../components';

import * as S from '../calendar/Calendar.styled';
import Spinner from '../../components/Spinner';

const Calendar = () => {
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

export default Calendar;
