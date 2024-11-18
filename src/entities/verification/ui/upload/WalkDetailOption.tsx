import { useFormContext, useWatch } from 'react-hook-form';

import * as S from './WalkDetailOption.styled';

const WalkDetailOption = () => {
  const { register } = useFormContext();

  const hours = useWatch({
    name: 'walkDetail.hours',
    defaultValue: 0,
  });
  const minutes = useWatch({
    name: 'walkDetail.minutes',
    defaultValue: 0,
  });

  return (
    <S.WalkOptionContainer
      $isTyping={Boolean(hours || minutes)}
      id="hours"
      htmlFor="hours"
    >
      <span>아이는 얼마나 산책했나요?</span>
      <input
        id="hours"
        type="number"
        min={0}
        max={12}
        {...register('walkDetail.hours', {
          min: 0,
          max: 12,
        })}
      />
      <span>시</span>
      <input
        id="minutes"
        type="number"
        min={0}
        max={60}
        {...register('walkDetail.minutes', {
          min: 0,
          max: 60,
        })}
      />
      <span>분</span>
    </S.WalkOptionContainer>
  );
};

export default WalkDetailOption;
