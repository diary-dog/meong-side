import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

import {
  BATH_OPTION,
  MEAL_OPTION,
  TREAT_OPTION,
  VERIFICATION,
} from '../../../constants/verifications';
import VerificationRadioOptions from './VerificationRadioOptions';

import * as S from './VerificationOption.styled';

const VerificationOption = ({
  type,
  register,
  setValue,
  watch,
}: {
  type: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}) => {
  switch (type) {
    case VERIFICATION.WALK:
      return (
        <S.WalkOptionContainer
          $isTyping={watch('hour') || watch('minutes')}
          id="hour"
          htmlFor="hour"
        >
          <span>아이는 얼마나 산책했나요?</span>
          <input id="hour" type="number" {...register('hour')} />
          <span>시</span>
          <input id="minutes" type="number" {...register('minutes')} />
          <span>분</span>
        </S.WalkOptionContainer>
      );
    case VERIFICATION.MEAL:
      return (
        <VerificationRadioOptions
          name="meal"
          options={Object.values(MEAL_OPTION)}
          type={type}
          register={register}
          watch={watch}
          setValue={setValue}
        />
      );
    case VERIFICATION.TREAT:
      return (
        <VerificationRadioOptions
          name="treat"
          options={Object.values(TREAT_OPTION)}
          type={type}
          register={register}
          watch={watch}
          setValue={setValue}
        />
      );
    case VERIFICATION.BATH:
      return (
        <VerificationRadioOptions
          name="bath"
          options={Object.values(BATH_OPTION)}
          type={type}
          register={register}
          watch={watch}
          setValue={setValue}
        />
      );
  }
  return <S.None></S.None>;
};

export default VerificationOption;
