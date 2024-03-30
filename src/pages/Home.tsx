import { useNavigate } from 'react-router-dom';

import ROUTE_PATH from '../router/constants';
import { Layout } from '../components';
import { Bath, Meal, Snack, Walk } from '../components/Icons';
import VerificationField from '../components/verification/VerificationField';
import { pet } from '../utils/mockData';

import * as S from './Home.styled';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <S.Container>
        <VerificationField pet={pet} />
        <S.VerificationContainer>
          <S.VerificationWrapper>
            <S.VerificationItem
              id="walk"
              onClick={() => navigate(ROUTE_PATH.VERIFICATION_WALKPOST)}
            >
              <Walk />
              <span>산책인증</span>
            </S.VerificationItem>
            <S.VerificationItem
              id="meal"
              onClick={() => navigate(ROUTE_PATH.VERIFICATION_MEALPOST)}
            >
              <Meal />
              <span>식사인증</span>
            </S.VerificationItem>
            <S.VerificationItem
              id="treat"
              onClick={() => navigate(ROUTE_PATH.VERIFICATION_SNACKPOST)}
            >
              <Snack />
              <span>간식인증</span>
            </S.VerificationItem>
            <S.VerificationItem
              id="bath"
              onClick={() => navigate(ROUTE_PATH.VERIFICATION_BATHPOST)}
            >
              <Bath />
              <span>목욕인증</span>
            </S.VerificationItem>
          </S.VerificationWrapper>
          <S.VerificationSurvival
            onClick={() => navigate(ROUTE_PATH.VERIFICATION_ETCPOST)}
          >
            순간포착! 일상인증
          </S.VerificationSurvival>
        </S.VerificationContainer>
      </S.Container>
      <Layout.BottomBar />
    </Layout>
  );
};

export default Home;
