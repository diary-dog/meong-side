import { Layout, VerificationCalendar } from '../components';

import * as S from './Intro.styled';

const Calendar = () => {
  return (
    <Layout top={{ title: '캘린더보기', backGroundColor: ' #f9f5f5' }}>
      <S.Container>
        <VerificationCalendar>
          <VerificationCalendar.Header />
          <VerificationCalendar.Body />
          <VerificationCalendar.Footer />
        </VerificationCalendar>
      </S.Container>
    </Layout>
  );
};

export default Calendar;
