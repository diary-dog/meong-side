import styled from 'styled-components';

import { Layout, VerificationCalendar } from '../components';

const Calendar = () => {
  return (
    <Layout>
      <Layout.TopBar title={'캘린더보기'} backGroundColor=" #f9f5f5" />
      <Container>
        <VerificationCalendar>
          <VerificationCalendar.Header />
          <VerificationCalendar.Body />
          <VerificationCalendar.Footer />
        </VerificationCalendar>
      </Container>
      <Layout.BottomBar />
    </Layout>
  );
};

export default Calendar;

export const Container = styled.div`
  padding: 80px 15px;
  height: calc(100vh - 50px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #f9f5f5;
  gap: 20px;
`;
