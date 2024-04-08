import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { LeftArrowIcon } from '../Icons';
import ROUTE_PATH from '../../router/constants';
import UserImage from '../common/UserImage';
import { Button, Input } from '..';

import * as G from './settingGlobal.styled';

interface SendingInvitation {
  email: string;
}

const SendingInvitationForm = ({ onNext }: { onNext: () => void }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<SendingInvitation>({ mode: 'onSubmit' });
  const navigate = useNavigate();
  const imageUrl = '';

  const onSubmit = (data: SendingInvitation) => {
    onNext();
    console.log(data);
  };
  const isValid = watch('email')?.length > 0 && !errors.email?.message;

  return (
    <G.Container onClick={handleSubmit(onSubmit)}>
      <G.HeaderBar>
        <LeftArrowIcon
          id="back-button"
          onClick={() => navigate(ROUTE_PATH.SETTING)}
        />
        <h3>공유링크보내기</h3>
        <div></div>
      </G.HeaderBar>
      <UserImage size="XL" imageUrl={imageUrl} />
      <G.ContentWrapper $isValid={isValid}>
        <p>함께 관리할 사람의 이메일을 알려주세요!</p>
        <Input
          type="email"
          {...register('email', {
            required: '필수 응답 항목입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: '이메일 형식이 아닙니다.',
            },
          })}
          placeholder="이메일을 입력해주세요"
          isValid={isValid}
        />
        <G.ErrorMessage>{errors.email?.message ?? ''}</G.ErrorMessage>
        <Button type="submit" color={isValid ? 'P-BUTTON2' : 'INACTIVE-BUTTON'}>
          완료
        </Button>
      </G.ContentWrapper>
    </G.Container>
  );
};
export default SendingInvitationForm;
