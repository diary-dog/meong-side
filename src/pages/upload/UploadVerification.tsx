import { useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

import {
  ConformVerification,
  ConformVerificationContents,
  VerificationUploadForm,
} from '../../components';
import { useFunnel } from '../../hooks/useFunnel';
import { VERIFICATION } from '../../constants/verifications';
import { useUploadVerification } from './hooks/mutation';
import transformFormData from './utils/transFormData';
import type { UploadVerificationForm } from '../../types/verification';

const UPLOAD_STEP = {
  인증성공: '인증 성공',
  인증순간남기기: '인증 순간 남기기 폼',
  인증순간남기기성공: '인증 순간 남기기 성공',
} as const;

const UploadVerification = () => {
  const { category } = useParams();
  const isSkip = category === VERIFICATION.DAILY;
  const [Funnel, setStep] = useFunnel<
    (typeof UPLOAD_STEP)[keyof typeof UPLOAD_STEP]
  >(isSkip ? UPLOAD_STEP.인증순간남기기 : UPLOAD_STEP.인증성공);

  const methods = useForm();
  const { mutate, data: uploadedVerificationData } = useUploadVerification();

  const onSubmit = (formData: UploadVerificationForm) => {
    const uploadVerificationData = transformFormData(formData, category!);
    mutate(uploadVerificationData, {
      onSuccess: () => setStep(UPLOAD_STEP.인증순간남기기성공),
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Funnel>
          <Funnel.Step name={UPLOAD_STEP.인증성공}>
            <ConformVerification
              onNext={() => setStep(UPLOAD_STEP.인증순간남기기)}
            />
          </Funnel.Step>
          <Funnel.Step name={UPLOAD_STEP.인증순간남기기}>
            <VerificationUploadForm />
          </Funnel.Step>
          <Funnel.Step name={UPLOAD_STEP.인증순간남기기성공}>
            <ConformVerificationContents
              uploadedData={uploadedVerificationData}
            />
          </Funnel.Step>
        </Funnel>
      </form>
    </FormProvider>
  );
};

export default UploadVerification;
