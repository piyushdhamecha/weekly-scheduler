import _ from 'lodash'
import React from 'react';

import {
  StyledProgressContainer,
  StyledProgressText,
  StyledProgress,
} from './WeeklySchedulerStyled'

import { getHourDiffBetweenTime } from '../../utils/dateUtils';
import { CELL_WIDTH, ROW_HEADER_WIDTH } from '../../constants'

const WeeklySchedulerProgress = ({
  backgroundColor = '#12BBAB',
  startTime,
  progress
}) => {
  const { name, startTime: progressStartTime, endTime: progressEndTime, nestedProgressList } = progress

  const offsetHours = getHourDiffBetweenTime(startTime, progressStartTime)
  const progressHourDifference = getHourDiffBetweenTime(progressStartTime, progressEndTime)
  
  const left = (offsetHours * CELL_WIDTH) + ROW_HEADER_WIDTH
  const width = progressHourDifference * CELL_WIDTH
  
  const leftBorderWidth = Math.abs(left / CELL_WIDTH)
  const progressBorderWidth = Math.abs(width / CELL_WIDTH)
  
  const total = width + progressBorderWidth

  const renderNestedProgress = ({
    backgroundColor: nestedBackgroundColor = '#008B9C',
    startTime: nestedStartTime,
    endTime: nestedEndTime
  }) => {
    const nestedHourDifference = getHourDiffBetweenTime(nestedStartTime, nestedEndTime)
    const nestedOffsetHours = getHourDiffBetweenTime(progressStartTime, nestedStartTime)

    const nestedLeft = nestedOffsetHours * CELL_WIDTH
    const nestedWidth = nestedHourDifference * CELL_WIDTH

    const nestedBorderWidth = Math.abs(nestedWidth / CELL_WIDTH)
    const nestedLeftBorderWidth = Math.abs(nestedLeft / CELL_WIDTH)

    return (
      <StyledProgress
        background={nestedBackgroundColor}
        left={nestedLeft + nestedLeftBorderWidth}
        width={nestedWidth + nestedBorderWidth}
      />
    )
  }

  return (
    <StyledProgressContainer left={left + leftBorderWidth} top={10} width={total}>
      <StyledProgress background={backgroundColor} width={total} />
      {_.map(nestedProgressList, renderNestedProgress)}
      <StyledProgressText width={total}>
        {name}
      </StyledProgressText>
    </StyledProgressContainer>
  );
};

export default WeeklySchedulerProgress;
