import React from 'react';

import {
  StyledProgressContainer,
  StyledProgressText,
  StyledProgress,
} from './WeeklySchedulerStyled'

const WeeklySchedulerProgress = ({ text, total, used, left, top}) => {
  return (
    <StyledProgressContainer left={left} top={top} width={total}>
      <StyledProgressText width={total}>
        {text}
      </StyledProgressText>
      <StyledProgress background='#12BBAB' width={total} />
      <StyledProgress left={50} background='#008B9C' width={used} />
    </StyledProgressContainer>
  );
};

export default WeeklySchedulerProgress;
