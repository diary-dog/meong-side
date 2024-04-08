import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { Fragment } from 'react/jsx-runtime';

import * as S from './VerificationRadioOptions.styled';

export type VerificationWithOption = 'meal' | 'treat' | 'bath';

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
  const currentValue = watch(name) as string;

  return (
    <S.VerificationOptionContainer $name={name}>
      {Object.values(options).map((value) => (
        <Fragment key={value}>
          <input
            id={value}
            type="radio"
            value={value}
            {...register(name)}
            onClick={(e) => {
              if (currentValue === e.currentTarget.value) {
                setValue(name, '');
                e.currentTarget.checked = false;
              }
            }}
          />
          <label
            htmlFor={value}
            className={watch(name) === value ? 'selected' : ''}
          >
            {value}
          </label>
        </Fragment>
      ))}
    </S.VerificationOptionContainer>
  );
};

export default VerificationRadioOptions;
