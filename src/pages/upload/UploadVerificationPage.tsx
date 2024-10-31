import { useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

import {
  ConformVerification,
  ConformVerificationContents,
  VerificationUploadForm,
} from '../../shared/ui';
import { useFunnel } from '../../shared/hooks/useFunnel';
import { VERIFICATION } from '../../shared/constants/verification';
import type { UploadVerificationForm } from '../../shared/types/verification';
import transformFormData from '../../widgets/verification/lib/transFormData';
import { useUploadVerification } from '../../entities/verification';
import isValidUploadFormData from '../../widgets/verification/lib/validateFromData';
import {
  INVALID_CATEGORY,
  INVALID_FILLED_FILED_COUNT,
} from '../../shared/constants/message';

const UPLOAD_STEP = {
  인증성공: '인증 성공',
  인증순간남기기: '인증 순간 남기기 폼',
  인증순간남기기성공: '인증 순간 남기기 성공',
} as const;

const UploadVerificationPage = () => {
  const { category } = useParams();
  if (!category) {
    throw new Error(INVALID_CATEGORY);
  }

  const isSkip = category === VERIFICATION.DAILY.value;
  const [Funnel, setStep] = useFunnel<
    (typeof UPLOAD_STEP)[keyof typeof UPLOAD_STEP]
  >(isSkip ? UPLOAD_STEP.인증순간남기기 : UPLOAD_STEP.인증성공);

  const methods = useForm<UploadVerificationForm>();
  const { mutate } = useUploadVerification();

  const onSubmit = (formData: UploadVerificationForm) => {
    if (isValidUploadFormData(formData)) {
      const uploadVerificationData = transformFormData(formData, category!);
      setStep(UPLOAD_STEP.인증순간남기기성공);
      mutate(uploadVerificationData, {
        onSuccess: () => setStep(UPLOAD_STEP.인증순간남기기성공),
      });
    } else {
      methods.setError('root', {
        message: INVALID_FILLED_FILED_COUNT,
      });
    }
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
            <VerificationUploadForm category={category} />
          </Funnel.Step>
          <Funnel.Step name={UPLOAD_STEP.인증순간남기기성공}>
            <ConformVerificationContents category={category} />
          </Funnel.Step>
        </Funnel>
      </form>
    </FormProvider>
  );
};

export default UploadVerificationPage;
