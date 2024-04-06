import {
  ConformVerification,
  ConformVerificationContents,
  VerificationUploadForm,
} from '../components';
import { useFunnel } from '../hooks/useFunnel';

const UPLOAD_STEP = {
  인증성공: '인증 성공',
  인증순간남기기: '인증 순간 남기기 폼',
  인증순간남기기성공: '인증 순간 남기기 성공',
} as const;

const UploadVerification = () => {
  const [Funnel, setStep] = useFunnel<
    (typeof UPLOAD_STEP)[keyof typeof UPLOAD_STEP]
  >(UPLOAD_STEP.인증성공);

  return (
    <Funnel>
      <Funnel.Step name={UPLOAD_STEP.인증성공}>
        <ConformVerification
          onNext={() => setStep(UPLOAD_STEP.인증순간남기기)}
        />
      </Funnel.Step>
      <Funnel.Step name={UPLOAD_STEP.인증순간남기기}>
        <VerificationUploadForm
          onNext={() => setStep(UPLOAD_STEP.인증순간남기기성공)}
        />
      </Funnel.Step>

      <Funnel.Step name={UPLOAD_STEP.인증순간남기기성공}>
        <ConformVerificationContents />
      </Funnel.Step>
    </Funnel>
  );
};

export default UploadVerification;
