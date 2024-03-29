import {
  ConfirmPet,
  RegisterPet,
  SelectPet,
  InputInvitationLink,
} from '../../components/Auth';
import { useFunnel } from '../../hooks/useFunnel';

interface Pet {
  name: string;
  bornOfYear: number;
  gender: '남아' | '여아';
  imageUrl: '';
}
export interface RegisterData {
  registerPet: Pet;
  invitationLink: string;
}

const Register = () => {
  const [Funnel, setStep] = useFunnel<
    '계정확인' | '펫확인' | '펫등록하기' | '등록및초대선택하기' | '초대링크입력'
  >('등록및초대선택하기');

  return (
    <Funnel>
      <Funnel.Step name="등록및초대선택하기">
        <SelectPet
          onResister={() => setStep('펫등록하기')}
          onInvitationLink={() => setStep('초대링크입력')}
        />
      </Funnel.Step>
      <Funnel.Step name="초대링크입력">
        <InputInvitationLink
          onNext={() => setStep('펫확인')}
          onPrevious={() => setStep('등록및초대선택하기')}
        />
      </Funnel.Step>
      <Funnel.Step name="펫확인">
        <ConfirmPet onInCorrect={() => setStep('초대링크입력')} />
      </Funnel.Step>
      <Funnel.Step name="펫등록하기">
        <RegisterPet onPrevious={() => setStep('등록및초대선택하기')} />
      </Funnel.Step>
    </Funnel>
  );
};

export default Register;
