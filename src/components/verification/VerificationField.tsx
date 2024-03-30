import { Pet } from '../../utils/mockData';
import { Female, Male } from '../Icons';
import UserImage from '../common/UserImage';
import * as S from './VerificationField.styled';

const getAge = (bonsOfYear: number) =>
  new Date().getFullYear() - bonsOfYear + 1;

const VerificationField = ({ pet }: { pet: Pet }) => {
  return (
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
  );
};

export default VerificationField;
