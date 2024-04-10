import { useNavigate } from 'react-router-dom';
import * as S from '../Home.styled';
import { ReactNode } from 'react';
import { VERIFICATION } from '../../../constants/verifications';

const VerificationButton = ({
  icon,
  title,
  name,
  navigatePath,
}: {
  icon?: ReactNode;
  title: string;
  name: string;
  navigatePath: string;
}) => {
  const navigate = useNavigate();
  switch (name) {
    case VERIFICATION.SURVIVAL:
      return (
        <S.VerificationSurvival onClick={() => navigate(navigatePath)}>
          순간포착! 일상인증
        </S.VerificationSurvival>
      );
    default:
      return (
        <S.VerificationItem id={name} onClick={() => navigate(navigatePath)}>
          {icon}
          <span>{title}</span>
        </S.VerificationItem>
      );
  }
};

export default VerificationButton;
