import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { Fragment } from 'react/jsx-runtime';

import { verificationOption } from '../../../shared/constants/verification';
import * as S from './VerificationRadioOptions.styled';

const VerificationRadioOptions = ({
  options,
  register,
  watch,
  setValue,
}: {
  options: string[];
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}) => {
  const currentValue = watch(verificationOption) as string;

  return (
    <S.VerificationOptionContainer>
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
