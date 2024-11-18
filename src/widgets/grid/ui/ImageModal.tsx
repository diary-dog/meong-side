import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { CloseIcon } from '@/shared/ui/Icons';

const ImageModal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  const modalRoot = document.querySelector('#modal-root');
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = `0px`;
    };
  }, []);

  if (!modalRoot) return null;

  return createPortal(
    <ModalOverlay>
      <CloseIcon id="closeButton" onClick={onClose} />
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>,
    modalRoot
  );
};

export default ImageModal;

const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000e5;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  left: 0;

  #closeButton {
    width: 100%;
    max-width: 390px;
    transform: translateX(42%);
    margin-bottom: 21px;
    cursor: pointer;
  }
`;
const ModalContent = styled.div`
  width: 100%;
  max-width: 390px;
  height: 520px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  object-fit: cover;
`;
