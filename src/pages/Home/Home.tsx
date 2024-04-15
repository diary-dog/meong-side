import ROUTE_PATH from '../../router/constants';
import { Layout } from '../../components';
import { Bath, Meal, Treats, Walk } from '../../components/Icons';
import VerificationField from './components/VerificationField';
import { VERIFICATION } from '../../constants/verifications';
import { useVerificationCount } from './hooks/queries';
import VerificationButton from './components/VerificationButton';

import * as S from './Home.styled';

const Home = () => {
  const { data, isLoading } = useVerificationCount({ petId: 1 });

  return (
    <Layout>
      {isLoading ? (
        <div>로딩</div>
      ) : (
        <S.Container>
          <VerificationField pet={data} />
          <S.VerificationContainer>
            <S.VerificationWrapper>
              <VerificationButton
                name={VERIFICATION.WALK}
                navigatePath={`${ROUTE_PATH.VERIFICATION}/${VERIFICATION.WALK}`}
                title="산책인증"
                icon={<Walk />}
              />
              <VerificationButton
                name={VERIFICATION.MEAL}
                navigatePath={`${ROUTE_PATH.VERIFICATION}/${VERIFICATION.MEAL}`}
                title="식사인증"
                icon={<Meal />}
              />
              <VerificationButton
                name={VERIFICATION.TREATS}
                navigatePath={`${ROUTE_PATH.VERIFICATION}/${VERIFICATION.TREATS}`}
                title="간식인증"
                icon={<Treats />}
              />
              <VerificationButton
                name={VERIFICATION.BATH}
                navigatePath={`${ROUTE_PATH.VERIFICATION}/${VERIFICATION.BATH}`}
                title="목욕인증"
                icon={<Bath />}
              />
            </S.VerificationWrapper>
            <VerificationButton
              name={VERIFICATION.DAILY}
              navigatePath={`${ROUTE_PATH.VERIFICATION}/${VERIFICATION.DAILY}`}
              title="순간포착! 일상인증"
            />
          </S.VerificationContainer>
        </S.Container>
      )}
    </Layout>
  );
};

export default Home;
