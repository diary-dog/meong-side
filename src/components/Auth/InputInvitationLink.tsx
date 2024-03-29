import { useForm } from 'react-hook-form';

import { Button, Input } from '..';
import { InvitationIcon } from '../Icons';

import {
  ButtonWrapper,
  ConTainer,
  IconWrapper,
} from './InputInvitationLink.styled';

interface InviteLink {
  link: string;
}

const InputInvitationLink = ({
  onNext,
  onPrevious,
}: {
  onNext: () => void;
  onPrevious: () => void;
}) => {
  const { register, watch, handleSubmit } = useForm<InviteLink>({
    mode: 'onChange',
  });
  const onSubmit = (data: InviteLink) => {
    console.log(data);
    onNext();
  };
  return (
    <ConTainer onSubmit={handleSubmit(onSubmit)}>
      <IconWrapper>
        <InvitationIcon />
        <h3 className="title">초대링크가 있어요</h3>
      </IconWrapper>
      <Input
        {...register('link', { required: true })}
        placeholder="링크주소를 알려주세요."
        type="url"
        isValid={watch('link')?.length > 0}
      />
      <ButtonWrapper>
        <Button
          type="submit"
          color={watch('link')?.length > 0 ? 'P-BUTTON2' : 'INACTIVE-BUTTON'}
        >
          확인
        </Button>
        <Button onClick={onPrevious} color="INACTIVE-BUTTON">
          닫기
        </Button>
      </ButtonWrapper>
    </ConTainer>
  );
};

export default InputInvitationLink;
