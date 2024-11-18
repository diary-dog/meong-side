import { useNavigate } from 'react-router-dom';

import SendingInvitationForm from '@/entities/family/ui/SendingInvitationForm';
import SuccessInvitation from '@/entities/family/ui/SuccessInvitation';
import { useFunnel } from '@/shared/hooks/useFunnel';
import ROUTE_PATH from '@/shared/constants/routePath';

const SendingInvitationPage = () => {
  const [Funnel, setStep] = useFunnel<'공유링크보내기' | '공유링크성공'>(
    '공유링크보내기'
  );
  const navigate = useNavigate();
  return (
    <Funnel>
      <Funnel.Step name="공유링크보내기">
        <SendingInvitationForm onNext={() => setStep('공유링크성공')} />
      </Funnel.Step>
      <Funnel.Step name="공유링크성공">
        <SuccessInvitation onNext={() => navigate(ROUTE_PATH.ROOT)} />
      </Funnel.Step>
    </Funnel>
  );
};

export default SendingInvitationPage;
