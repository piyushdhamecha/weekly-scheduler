import _ from 'lodash'
import moment from 'moment'

import React from 'react';

import {
  StyledTable,
  StyledRow,
  StyledColumnHeaderWrapper,
  StyledColumnHeader,
  StyledRowHeader,
  StyledRowSubHeader,
  StyledCell,
  StyledRowContent,
} from './WeeklySchedulerStyled'
import WeeklySchedulerProgress from './WeeklySchedulerProgress'

import { getHourDiffBetweenTime } from '../../utils/dateUtils';
import { CELL_WIDTH, ROW_HEADER_WIDTH, HEDER_OFFSET} from '../../constants'

const WeeklyScheduler = ({
  startTime,
  endTime,
  dateRange,
}) => {
  const startTimeWithDate = moment().set({ hour: startTime, minute: 0, second: 0 })
  const hourDifference = getHourDiffBetweenTime(startTime, endTime)
  
  const timeRange = []
  for (let index = 0; index < hourDifference; index++) {
    timeRange.push(moment(startTimeWithDate).add(index + 1, "hour"))
  }

  const timeHeaderRange = [
    moment(startTimeWithDate),
    ...timeRange
  ]

  const renderColumnHeader = () => {
    return (
      <StyledColumnHeaderWrapper>
        {_.map(timeHeaderRange, (timeWithDate, index) => {
          const left = index === 0 ? HEDER_OFFSET : HEDER_OFFSET + (index * CELL_WIDTH)
          const leftBorderWidth = Math.abs(left / CELL_WIDTH)

          return(
            <StyledColumnHeader key={timeWithDate.valueOf()} left={left + leftBorderWidth}>
              {timeWithDate.format('HH:mm')}
            </StyledColumnHeader>
          )
        })}
      </StyledColumnHeaderWrapper>
    )   
  }

  const renderRows = () => _.map(dateRange, ({ date, progressList }) => {
    const renderProgress = (progress) => {
      return (
        <WeeklySchedulerProgress
          startTime={startTime}
          endTime={endTime}
          progress={progress}
        />
      )
    }

    return (
      <StyledRow key={date.valueOf()}>
        <StyledRowContent>
          <StyledCell width={ROW_HEADER_WIDTH}>
            <StyledRowHeader>
              {date.format('dddd').slice(0, 3).toUpperCase()}
              <StyledRowSubHeader>
                {date.format('DD/MM')}
              </StyledRowSubHeader>
            </StyledRowHeader>
          </StyledCell>
          {_.map(timeRange, () => <StyledCell />)}
          {_.map(progressList,  renderProgress)}
        </StyledRowContent>
      </StyledRow>
    )
  })
    
  return (
    <StyledTable>
      <StyledRow>
        {renderColumnHeader()}
      </StyledRow>
      {renderRows()}
    </StyledTable>
  );
};

export default WeeklyScheduler;
