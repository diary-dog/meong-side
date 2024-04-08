import { useForm, useWatch } from 'react-hook-form';

import { Button, Input } from '../../../components';
import UserImage from '../../../components/UserImage';
import { CameraIcon, Female, Male } from '../../../components/Icons';

import * as S from './RegisterPet.styled';
import * as G from './RegisterGlobal.styled';
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
  const previewImageURL =
    previewImage && previewImage[0] ? URL.createObjectURL(previewImage[0]) : '';

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <G.Title className="title">
        반가워요!
        <br />
        우리 아이를 등록해주세요.
      </G.Title>
      <S.InputWrapper>
        <input
          type="file"
          id="imageUrl"
          accept="image/*"
          {...register('imageUrl')}
        />
        {previewImageURL ? (
          <label htmlFor="imageUrl">
            <UserImage size="XL" imageUrl={previewImageURL} />
          </label>
        ) : (
          <S.DefaultImage>
            <label className="border" htmlFor="imageUrl">
              <CameraIcon className="svg" />
            </label>
          </S.DefaultImage>
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
        <S.GenderWrapper>
          <S.GenderButton
            {...register('gender', { required: '성별을 선택해주세요.' })}
            name="gender"
            type="radio"
            id="male"
            value="male"
          />
          <S.GenderItem id="male" htmlFor="male">
            <Male />
            <span>남아</span>
          </S.GenderItem>
          <S.GenderButton
            {...register('gender', { required: '성별을 선택해주세요.' })}
            name="gender"
            type="radio"
            id="female"
            value="female"
          />
          <S.GenderItem id="female" htmlFor="female">
            <Female />
            <span>여아</span>
          </S.GenderItem>
        </S.GenderWrapper>
        <S.ErrorMessage>
          {Object.values(errors)?.at(0)?.message ?? ''}
        </S.ErrorMessage>
      </S.InputWrapper>
      <S.ButtonWrapper>
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
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default RegisterPet;
