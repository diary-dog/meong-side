import { useFormContext, useWatch } from 'react-hook-form';
import { Fragment } from 'react/jsx-runtime';

import {
  COMPLETION_STATUS,
  VERIFICATION_DETAIL,
} from '@/entities/verification/constants';
import {
  OptionWithValue,
  UploadVerificationForm,
} from '@/entities/verification/verification.dto';

import * as S from './VerificationRadioOptions.styled';

const VerificationRadioOptions = ({
  options,
}: {
  options: OptionWithValue[];
}) => {
  const { register, setValue } = useFormContext();
  const verificationDetail = useWatch<UploadVerificationForm>({
    name: VERIFICATION_DETAIL,
  });
  return (
    <S.VerificationOptionContainer>
      {Object.values(options).map((option) => {
        return (
          <Fragment key={option.value}>
            <S.OptionLabel htmlFor={option.label}>
              <input
                id={option.label}
                type="radio"
                value={option.value}
                {...register(VERIFICATION_DETAIL)}
                onClick={(e) => {
                  if (verificationDetail === e.currentTarget.value) {
                    setValue(VERIFICATION_DETAIL, COMPLETION_STATUS.DEFAULT);
                    e.currentTarget.checked = false;
                  } else {
                    e.currentTarget.checked = true;
                  }
                }}
              />

              {option.label}
            </S.OptionLabel>
          </Fragment>
        );
      })}
    </S.VerificationOptionContainer>
  );
};

export default VerificationRadioOptions;
