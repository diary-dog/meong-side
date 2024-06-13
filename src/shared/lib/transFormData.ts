import { getVerificationCategory } from './getVerificationInfo';
import type {
  UploadVerificationContents,
  UploadVerificationForm,
  WalkOption,
} from '../types/verification';

const isWalkOption = (data: UploadVerificationForm): data is WalkOption => {
  return 'hour' in data && 'minutes' in data;
};

const transformFormData = (
  formData: UploadVerificationForm,
  verificationCategory: string
): UploadVerificationContents => {
  const transformedData = {
    category: getVerificationCategory(verificationCategory),
    imageUrl:
      formData.imageUrl && formData.imageUrl[0]
        ? URL.createObjectURL(formData.imageUrl[0])
        : '',
    comment: formData.comment,
    verificationOption: formData.verificationOption,
  };

  if (isWalkOption(formData)) {
    const hour = formData.hour ? `${formData.hour}시` : '';
    const minutes = formData.minutes ? ` ${formData.minutes}분` : '';
    transformedData.verificationOption = `${hour}${minutes}`;
  }

  return transformedData;
};

export default transformFormData;
