
import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import styled from 'styled-components';

import {
  BATH_OPTION,
  MEAL_OPTION,
  TREAT_OPTION,
  VERIFICATION,
} from '../../utils/constants';
import VerificationRadioOptions from './VerificationRadioOptions';

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
        <WalkOptionContainer
          $isTyping={watch('hour') || watch('minutes')}
          id="hour"
          htmlFor="hour"
        >
          <span>아이는 얼마나 산책했나요?</span>
          <input id="hour" type="number" {...register('hour')} />
          <span>시</span>
          <input id="minutes" type="number" {...register('minutes')} />
          <span>분</span>
        </WalkOptionContainer>
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
  return <None></None>;
};

export default VerificationOption;

const WalkOptionContainer = styled.label<{ $isTyping: boolean }>`
  display: flex;
  width: 100%;
  max-height: 47px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px 19px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
  font-size: ${({ theme }) => theme.FONT.XS};
  color: ${({ theme, $isTyping }) =>
    $isTyping ? theme.COLORS['FONT-COLOR-A'] : theme.COLORS['FONT-COLOR-IA']};
  input {
    width: 25px;
    height: 26px;
    padding: 5px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS['INACTIVE-BUTTON']};
    text-align: center;
  }
`;

const None = styled.div`
  width: 100%;
  height: 47px;
`;
