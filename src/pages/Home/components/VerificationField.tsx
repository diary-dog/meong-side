import { Pet } from '../../../utils/mockData';
import { Female, Male } from '../../../components/Icons';
import UserImage from '../../../components/UserImage';
import * as S from './VerificationField.styled';

const getAge = (bonsOfYear: number) =>
  new Date().getFullYear() - bonsOfYear + 1;

const VerificationField = ({ pet }: { pet: Pet }) => {
  return (
    <S.Information>
      <S.PetInformation>
        <UserImage
          size="MD"
          imageUrl="https://s3-alpha-sig.figma.com/img/5863/dfd0/ecfbaaeeca706b67182635eecf0948c7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MddMWhsaWmlmzXsgjzt0fp81Oj99OQ8ItgL~q47r60vqwILiy5oWPPhS2-OWee5h3fDFKYAYDkBKYjiO4lGUqqRbeZYImm5nnGt5UGLBIoCcBSdwfBKuCg6o3ePG3noZz0PzXguSaRRq19Dg2Mki6uvBCEKK~PbhglLzyLbStjwRPq2Sv34mME86HdlmjXd81UH9HnTdyn2mrV5ikSa3SkJET-PMq0FWbja8nJM27z3Y3b-~8cNLt3TjJiBq~XISeVr-m4C0iaMWQcWUW6EuoWsoHs~FYcxcjlcgHg1nlYPlR30r7Q~-weTZJO8IgFRaiPC1uKN92ntjyV7WueKZEg__"
        />
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
