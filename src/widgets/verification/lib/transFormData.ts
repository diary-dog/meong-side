import { getVerificationMetadata } from '@/entities/verification/libs/getVerificationInfo';
import {
  UploadVerificationContents,
  UploadVerificationForm,
} from '@/entities/verification/verification.dto';

const transformFormData = (
  formData: UploadVerificationForm,
  verificationCategory: string
) => {
  const formDataToSend = new FormData();

  // #TODO: petId 로직 추가
  formDataToSend.append('petId', (1).toString());
  formDataToSend.append(
    'category',
    getVerificationMetadata(verificationCategory).type
  );
  formDataToSend.append('comment', formData.comment);

  if (formData.image && formData.image.length > 0) {
    const imageFile = formData.image[0];
    formDataToSend.append('image', imageFile, imageFile.name);
  } else {
    formDataToSend.append('image', '');
  }

  let verificationDetail: number = 0;
  if (formData.walkDetail) {
    const { hours, minutes } = formData.walkDetail;
    verificationDetail = (hours > 0 ? hours * 60 : 0) + +minutes;
  }
  formDataToSend.append(
    'verificationDetail',
    (formData.verificationDetail || verificationDetail).toString()
  );

  return formDataToSend as unknown as UploadVerificationContents;
};

export default transformFormData;
