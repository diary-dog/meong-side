import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { Fragment } from 'react/jsx-runtime';

import * as S from './VerificationRadioOptions.styled';
import { verificationOption } from '../../../constants/verifications';

export type VerificationWithOption = 'meal' | 'treats' | 'bath';

const VerificationRadioOptions = ({
  options,
  register,
  watch,
  setValue,
  name,
}: {
  options: string[];
  type: string;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  name: VerificationWithOption;
}) => {
  const currentValue = watch(verificationOption) as string;

  return (
    <S.VerificationOptionContainer $name={name}>
      {Object.values(options).map((value) => (
        <Fragment key={value}>
          <input
            id={value}
            type="radio"
            value={value}
            {...register(verificationOption)}
            onClick={(e) => {
              if (currentValue === e.currentTarget.value) {
                setValue(verificationOption, '');
                e.currentTarget.checked = false;
              }
            }}
          />
          <label
            htmlFor={value}
            className={watch(verificationOption) === value ? 'selected' : ''}
          >
            {value}
          </label>
        </Fragment>
      ))}
    </S.VerificationOptionContainer>
  );
};

export default VerificationRadioOptions;
