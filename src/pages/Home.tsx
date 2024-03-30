import { useNavigate } from 'react-router-dom';

import ROUTE_PATH from '../router/constants';
import UserImage from '../components/common/UserImage';
import { Layout } from '../components';
import { Bath, Female, Male, Meal, Snack, Walk } from '../components/Icons';

import * as S from './Home.styled';

interface Pet {
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

const pet: Pet = {
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
const getAge = (bonsOfYear: number) =>
  new Date().getFullYear() - bonsOfYear + 1;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <S.Container>
        <S.Information>
          <S.PetInformation>
            <UserImage size="MD" imageUrl="" />
            <span id="name">{pet.name}</span>
            <span id="age">
              {getAge(pet.bonsOfYear)}살{' '}
              {pet.gender === '남아' ? <Male /> : <Female />}
            </span>
          </S.PetInformation>
          <S.VerificationInformation>
            <h3 id="title">오늘의 횟수</h3>
            <S.VerificationCount>
              <span id="walk">산책 {pet.walkCount}번</span>
              <span id="meal">식사 {pet.walkCount}번</span>
              <span id="treat">간식 {pet.treatsCount}번</span>
              <span id="bath">목욕 {pet.walkCount}번</span>
            </S.VerificationCount>
          </S.VerificationInformation>
        </S.Information>
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
