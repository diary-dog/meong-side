import { useNavigate } from 'react-router-dom';

import SendingInvitationForm from '../components/setting/SendingInvitationForm';
import SuccessInvitation from '../components/setting/SuccessInvitation';
import { useFunnel } from '../hooks/useFunnel';
import ROUTE_PATH from '../router/constants';

const SendingInvitation = () => {
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

export default SendingInvitation;
