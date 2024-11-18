import { Suspense } from 'react';

import ROUTE_PATH from '../../shared/constants/routePath';
import { Layout } from '../../shared/ui';
import { Bath, Meal, Treats, Walk } from '../../shared/ui/Icons';
import VerificationButton from '../../widgets/verification/ui/VerificationButton';
import VerificationField from '../../widgets/verification/ui/VerificationField';
import { VERIFICATION } from '../../entities/verification/constants';
import Spinner from '../../shared/ui/Spinner';

import * as S from './HomePage.styled';
import ErrorResetBoundaryWrapper from '../../shared/error/ErrorResetBoundaryWrapper';

const HomePage = () => {
  return (
    <Layout>
      <S.Container>
        <Suspense fallback={<Spinner />}>
          <ErrorResetBoundaryWrapper>
            <VerificationField petId="1" />
          </ErrorResetBoundaryWrapper>
        </Suspense>
        <S.VerificationContainer>
          <S.VerificationWrapper>
            <VerificationButton
              name={VERIFICATION.WALK.value}
              navigatePath={`${ROUTE_PATH.UPLOAD}/${VERIFICATION.WALK.value}`}
              title="산책인증"
              icon={<Walk />}
            />
            <VerificationButton
              name={VERIFICATION.MEAL.value}
              navigatePath={`${ROUTE_PATH.UPLOAD}/${VERIFICATION.MEAL.value}`}
              title="식사인증"
              icon={<Meal />}
            />
            <VerificationButton
              name={VERIFICATION.TREATS.value}
              navigatePath={`${ROUTE_PATH.UPLOAD}/${VERIFICATION.TREATS.value}`}
              title="간식인증"
              icon={<Treats />}
            />
            <VerificationButton
              name={VERIFICATION.BATH.value}
              navigatePath={`${ROUTE_PATH.UPLOAD}/${VERIFICATION.BATH.value}`}
              title="목욕인증"
              icon={<Bath />}
            />
          </S.VerificationWrapper>
          <VerificationButton
            name={VERIFICATION.DAILY.value}
            navigatePath={`${ROUTE_PATH.UPLOAD}/${VERIFICATION.DAILY.value}`}
            title="순간포착! 일상인증"
          />
        </S.VerificationContainer>
      </S.Container>
    </Layout>
  );
};

export default HomePage;
