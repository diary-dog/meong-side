import { Suspense } from 'react';

import ROUTE_PATH from '../../shared/constants/routePath';
import { Layout } from '../../shared/ui';
import { Bath, Meal, Treats, Walk } from '../../shared/ui/Icons';
import VerificationButton from '../../widgets/verification/ui/VerificationButton';
import VerificationField from '../../widgets/verification/ui/VerificationField';
import { VERIFICATION } from '../../shared/constants/verification';
import Spinner from '../../shared/ui/Spinner';

import * as S from './HomePage.styled';

const HomePage = () => {
  return (
    <Layout>
      <S.Container>
        <Suspense fallback={<Spinner />}>
          <VerificationField petId="1" />
        </Suspense>
        <S.VerificationContainer>
          <S.VerificationWrapper>
            <VerificationButton
              name={VERIFICATION.WALK}
              navigatePath={`${ROUTE_PATH.UPLOAD}/${VERIFICATION.WALK}`}
              title="산책인증"
              icon={<Walk />}
            />
            <VerificationButton
              name={VERIFICATION.MEAL}
              navigatePath={`${ROUTE_PATH.UPLOAD}/${VERIFICATION.MEAL}`}
              title="식사인증"
              icon={<Meal />}
            />
            <VerificationButton
              name={VERIFICATION.TREATS}
              navigatePath={`${ROUTE_PATH.UPLOAD}/${VERIFICATION.TREATS}`}
              title="간식인증"
              icon={<Treats />}
            />
            <VerificationButton
              name={VERIFICATION.BATH}
              navigatePath={`${ROUTE_PATH.UPLOAD}/${VERIFICATION.BATH}`}
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
    </Layout>
  );
};

export default HomePage;
