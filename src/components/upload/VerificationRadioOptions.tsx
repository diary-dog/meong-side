import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { Fragment } from 'react/jsx-runtime';
import styled from 'styled-components';

type VerificationWithOption = 'meal' | 'treat' | 'bath';

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
    <VerificationOptionContainer $name={name}>
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
    </VerificationOptionContainer>
  );
};
    
export default VerificationRadioOptions;

const VerificationOptionContainer = styled.label<{
  $name: VerificationWithOption;
}>`
  display: flex;
  width: ${({ $name }) => ($name === 'treat' ? 'auto' : '100%')};
  margin: ${({ $name }) => ($name === 'treat' ? '0 -60px' : '')};
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.FONT.XS};

  input {
    display: none;
  }
  label {
    height: 35px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
    color: ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
    font-size: ${({ theme }) => theme.FONT.XS};
  }
  label.selected {
    background-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
    border-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
    color: ${({ theme }) => theme.COLORS['FONT-COLOR-A']};
  }
`;
