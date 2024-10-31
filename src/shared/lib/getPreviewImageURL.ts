export default function getPreviewImageURL(imageFile: FileList | string) {
  if (typeof imageFile === 'string') {
    return imageFile;
  }
  return imageFile && imageFile[0] ? URL.createObjectURL(imageFile[0]) : '';
}
