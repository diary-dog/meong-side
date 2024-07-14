import { Female, Male } from '../../../shared/ui/Icons';
import UserImage from '../../../shared/ui/UserImage';
import getAge from '../../../shared/lib/getAge';
import { GENDER } from '../../../shared/constants/pet';

import * as S from './VerificationField.styled';
import { useVerificationCount } from '../../../entities/verification';

const VerificationField = ({ petId }: { petId: string }) => {
  const { data: verificationCount } = useVerificationCount({
    petId,
  });
  return (
    <S.Information>
      <S.PetInformation>
        <UserImage size="MD" imageUrl={verificationCount.imageUrl} />
        <span id="name">{verificationCount.name}</span>
        <span id="age">
          {verificationCount.birthYear
            ? `${getAge(verificationCount.birthYear)}살`
            : ''}
          {verificationCount.gender === GENDER.MALE ? <Male /> : <Female />}
        </span>
      </S.PetInformation>
      <S.VerificationInformation>
        <h3 id="title">오늘의 횟수</h3>
        <S.VerificationCount>
          <span id="walk">
            산책 {verificationCount.verification.walkCount}번
          </span>
          <span id="meal">
            식사 {verificationCount.verification.walkCount}번
          </span>
          <span id="treats">
            간식 {verificationCount.verification.treatsCount}번
          </span>
          <span id="bath">
            목욕 {verificationCount.verification.walkCount}번
          </span>
        </S.VerificationCount>
      </S.VerificationInformation>
    </S.Information>
  );
};

export default VerificationField;
