import { Female, Male } from '../../../shared/ui/Icons';
import UserImage from '../../../shared/ui/UserImage';
import getAge from '../../../shared/lib/getAge';
import { VerificationCount } from '../../../shared/types/verification';
import { GENDER } from '../../../shared/constants/pet';

import * as S from './VerificationField.styled';

const VerificationField = ({ pet }: { pet?: VerificationCount }) => {
  return (
    <S.Information>
      <S.PetInformation>
        <UserImage size="MD" imageUrl={pet?.imageUrl} />
        <span id="name">{pet?.name}</span>
        <span id="age">
          {pet?.birthYear ? `${getAge(pet.birthYear)}살` : ''}
          {pet?.gender === GENDER.MALE ? <Male /> : <Female />}
        </span>
      </S.PetInformation>
      <S.VerificationInformation>
        <h3 id="title">오늘의 횟수</h3>
        <S.VerificationCount>
          <span id="walk">산책 {pet?.verification.walkCount}번</span>
          <span id="meal">식사 {pet?.verification.walkCount}번</span>
          <span id="treats">간식 {pet?.verification.treatsCount}번</span>
          <span id="bath">목욕 {pet?.verification.walkCount}번</span>
        </S.VerificationCount>
      </S.VerificationInformation>
    </S.Information>
  );
};

export default VerificationField;
