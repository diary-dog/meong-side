import { UploadVerificationForm } from '@/entities/verification/verification.dto';

export default function isValidUploadFormData(
  formData: UploadVerificationForm
) {
  if (
    formData.comment ||
    formData.verificationDetail ||
    formData.image.length > 0
  ) {
    return true;
  }
  if ('walkDetail' in formData) {
    return formData.walkDetail?.hours || formData.walkDetail?.minutes;
  }
  return false;
}
