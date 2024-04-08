import React, { PropsWithChildren } from 'react';

import * as S from './Modal.styled';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

const Modal = ({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) => {
  return (
    <S.ModalContainer>
      <S.DialogBox>{children}</S.DialogBox>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.ModalContainer>
  );
};

export default Modal;
