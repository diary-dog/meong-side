import { useNavigate } from 'react-router-dom';

import ROUTE_PATH from '../../router/constants';
import { Layout } from '../../components';
import { Bath, Meal, Snack, Walk } from '../../components/Icons';
import VerificationField from './components/VerificationField';
import { pet } from '../../utils/mockData';

import * as S from './Home.styled';
import { VERIFICATION } from '../../utils/constants';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`/verification/${1}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  console.log(window.location);
  return (
    <Layout>
      <S.Container>
        <VerificationField pet={pet} />
        <S.VerificationContainer>
          <S.VerificationWrapper>
            <S.VerificationItem
              id="walk"
              onClick={() =>
                navigate(`${ROUTE_PATH.VERIFICATION}/${VERIFICATION.WALK}`)
              }
            >
              <Walk />
              <span>산책인증</span>
            </S.VerificationItem>
            <S.VerificationItem
              id="meal"
              onClick={() =>
                navigate(`${ROUTE_PATH.VERIFICATION}/${VERIFICATION.MEAL}`)
              }
            >
              <Meal />
              <span>식사인증</span>
            </S.VerificationItem>
            <S.VerificationItem
              id="treat"
              onClick={() =>
                navigate(`${ROUTE_PATH.VERIFICATION}/${VERIFICATION.TREAT}`)
              }
            >
              <Snack />
              <span>간식인증</span>
            </S.VerificationItem>
            <S.VerificationItem
              id="bath"
              onClick={() =>
                navigate(`${ROUTE_PATH.VERIFICATION}/${VERIFICATION.BATH}`)
              }
            >
              <Bath />
              <span>목욕인증</span>
            </S.VerificationItem>
          </S.VerificationWrapper>
          <S.VerificationSurvival
            onClick={() =>
              navigate(`${ROUTE_PATH.VERIFICATION}/${VERIFICATION.SURVIVAL}`)
            }
          >
            순간포착! 일상인증
          </S.VerificationSurvival>
        </S.VerificationContainer>
      </S.Container>
    </Layout>
  );
};

export default Home;
