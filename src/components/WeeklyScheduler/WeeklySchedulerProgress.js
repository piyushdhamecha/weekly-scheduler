import React from 'react';

import {
  StyledProgressContainer,
  StyledProgressText,
  StyledProgress,
} from './WeeklySchedulerStyled'

const WeeklySchedulerProgress = ({ text, total, used, usedLeft, left, top}) => {
  return (
    <StyledProgressContainer left={left} top={top} width={total}>
      <StyledProgress background='#12BBAB' width={total} />
      <StyledProgress left={usedLeft} background='#008B9C' width={used} />
      <StyledProgressText width={total}>
        {text}
      </StyledProgressText>
    </StyledProgressContainer>
  );
};

export default WeeklySchedulerProgress;
