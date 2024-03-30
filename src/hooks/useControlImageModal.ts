import { useState } from 'react';

const useControlImageModal = () => {
  const [clickedImage, setClickedImage] = useState({
    isClicked: false,
    imageUrl: '',
  });

  const openImageModal = ({ imageUrl }: { imageUrl: string }) =>
    setClickedImage({ isClicked: true, imageUrl });
  const closeImageModal = () =>
    setClickedImage({ isClicked: false, imageUrl: '' });

  return { clickedImage, closeImageModal, openImageModal };
};

export default useControlImageModal;
