import { Female, Male } from '../../../shared/ui/Icons';
import UserImage from '../../../shared/ui/UserImage';
import getAge from '../../../shared/lib/getAge';
import { GENDER } from '../../../shared/constants/pet';
import useDetailPet from '../../../entities/verification/api/useDetailPet';

import * as S from './VerificationField.styled';

const VerificationField = ({ petId }: { petId: string }) => {
  const {
    data: { data: petInfo },
  } = useDetailPet({
    petId,
  });
  return (
    <S.Information>
      <S.PetInformation>
        <UserImage size="MD" imageUrl={petInfo.imageUrl} />
        <span id="name">{petInfo.name}</span>
        <span id="age">
          {petInfo.birthYear ? `${getAge(petInfo.birthYear)}살` : ''}
          {petInfo.gender === GENDER.MALE ? <Male /> : <Female />}
        </span>
      </S.PetInformation>
      <S.VerificationInformation>
        <h3 id="title">오늘의 횟수</h3>
        <S.VerificationCount>
          <span id="walk">
            산책 {petInfo.verifications?.WALK?.total ?? 0}번
          </span>
          <span id="meal">
            식사 {petInfo.verifications?.MEAL?.total ?? 0}번
          </span>
          <span id="treats">
            간식 {petInfo.verifications?.TREATS?.total ?? 0}번
          </span>
          <span id="bath">
            목욕 {petInfo.verifications?.BATH?.total ?? 0}번
          </span>
        </S.VerificationCount>
      </S.VerificationInformation>
    </S.Information>
  );
};

export default VerificationField;
