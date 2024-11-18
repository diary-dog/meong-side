import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { LeftArrowIcon } from '@/shared/ui/Icons';
import ROUTE_PATH from '@/shared/constants/routePath';
import UserImage from '@/shared/ui/UserImage';
import useInviteMember from '@/entities/family/queries/useInviteMember';
import Input from '@/shared/ui/Input';
import Button from '@/shared/ui/Button';

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
  const mutation = useInviteMember();

  // TODO: 현재 연결된 펫 데이터를 페칭해오는 api 와 쿼리훅 추가 필요
  const imageUrl = '';

  const onSubmit = (data: SendingInvitation) => {
    onNext();
    console.log(data);
    // TODO: 현재 로그인된 유저가 조회하고 있는 pet Id를 최상단에서 저장하고 있어야한다.
    mutation.mutate({ petId: '1', email: data.email });
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
      <G.ContentsWrapper $isValid={isValid}>
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
      </G.ContentsWrapper>
    </G.Container>
  );
};
export default SendingInvitationForm;
