import { useForm, useWatch } from 'react-hook-form';

import { Button, Input } from '..';
import UserImage from '../common/UserImage';
import { CameraIcon, Female, Male } from '../Icons';

import {
  Container,
  InputWrapper,
  DefaultImage,
  GenderWrapper,
  GenderButton,
  GenderItem,
  ErrorMessage,
  ButtonWrapper,
} from './RegisterPet.styled';
import { Title } from './register.styled';
interface PetInformation {
  name: string;
  bornOfYear: number;
  gender: '남아' | '여아';
  imageUrl: '';
}
const RegisterPet = ({ onPrevious }: { onPrevious: () => void }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PetInformation>({ mode: 'onBlur' });
  const onSubmit = (data: PetInformation) => {
    console.log(data);
  };
  const [previewImage, currentName, currentBornOfYear] = useWatch({
    name: ['imageUrl', 'name', 'bornOfYear'],
    control,
  });

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title className="title">
        반가워요!
        <br />
        우리 아이를 등록해주세요.
      </Title>
      <InputWrapper>
        <input
          type="file"
          id="imageUrl"
          accept="image/*"
          {...register('imageUrl')}
        />
        {previewImage ? (
          <label htmlFor="imageUrl">
            <UserImage
              size="XL"
              imageUrl={URL.createObjectURL(previewImage[0])}
            />
          </label>
        ) : (
          <DefaultImage>
            <label className="border" htmlFor="imageUrl">
              <CameraIcon className="svg" />
            </label>
          </DefaultImage>
        )}
        <Input
          {...register('name', { required: '이름을 입력해주세요.' })}
          placeholder="이름"
          type="text"
          isValid={currentName?.length > 0}
        />
        <Input
          {...register('bornOfYear', {
            validate: {
              range: (value) =>
                (value >= 1000 && value <= 10000) ||
                '태어난 해는 4글자로 입력해주세요.',
            },
            required: '태어난 해를 입력해주세요.',
          })}
          placeholder="태어난 해"
          type="number"
          isValid={1000 <= currentBornOfYear && currentBornOfYear <= 9999}
        />
        <GenderWrapper>
          <GenderButton
            {...register('gender', { required: '성별을 선택해주세요.' })}
            name="gender"
            type="radio"
            id="male"
            value="male"
          />
          <GenderItem id="male" htmlFor="male">
            <Male />
            <span>남아</span>
          </GenderItem>
          <GenderButton
            {...register('gender', { required: '성별을 선택해주세요.' })}
            name="gender"
            type="radio"
            id="female"
            value="female"
          />
          <GenderItem id="female" htmlFor="female">
            <Female />
            <span>여아</span>
          </GenderItem>
        </GenderWrapper>
        <ErrorMessage>
          {Object.values(errors)?.at(0)?.message ?? ''}
        </ErrorMessage>
      </InputWrapper>
      <ButtonWrapper>
        <Button
          color={
            Object.values(errors).length > 0 ? 'INACTIVE-BUTTON' : 'P-BUTTON2'
          }
          type="submit"
        >
          완료
        </Button>
        <Button onClick={onPrevious} color="INACTIVE-BUTTON">
          닫기
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default RegisterPet;
