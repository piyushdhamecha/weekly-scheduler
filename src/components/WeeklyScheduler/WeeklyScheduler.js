import _ from 'lodash'
import moment from 'moment'

import React from 'react';

import {
  StyledTable,
  StyledRow,
  StyledColumnHeader,
  StyledRowHeader,
  StyledRowSubHeader,
  StyledCell,
  StyledRowContent,
} from './WeeklySchedulerStyled'
import WeeklySchedulerProgress from './WeeklySchedulerProgress'

const WeeklyScheduler = ({
  startTime,
  endTime,
  startDate,
  endDate,
}) => {

  const startTimeWithDate = moment().set({ hour: startTime, minute: 0,second: 0 })
  const endTimeWithDate = moment().set({ hour: endTime, minute: 0, second: 0 })
  const timeDuration = moment.duration(endTimeWithDate.diff(startTimeWithDate))
  const hourDifference = timeDuration.asHours()

  const timeRange = []
  for (let index = 0; index < hourDifference; index++) {
    timeRange.push(moment(startTimeWithDate).add(index, "hour"))
  }

  const dateDiff = moment(endDate).diff(moment(startDate), 'days')

  const dateRange = []
  for (let index = 0; index < dateDiff; index++) {
    dateRange.push(moment(startDate).add(index, "day"))
  }
  
  const renderColumnHeader = () => {
    return [
      <StyledColumnHeader/>,
      ..._.map(timeRange, (timeWithDate) => (
        <StyledColumnHeader key={timeWithDate.valueOf()}>
          {timeWithDate.format('HH:mm')}
        </StyledColumnHeader>
      ))
    ]
  }

  const renderRows = () => _.map(dateRange, (date) => {
    return (
      <StyledRow key={date.valueOf()}>
        <StyledRowContent>
          <StyledCell>
            <StyledRowHeader>
              {date.format('dddd').slice(0, 3).toUpperCase()}
              <StyledRowSubHeader>
                {date.format('DD/MM')}
              </StyledRowSubHeader>
            </StyledRowHeader>
          </StyledCell>
          {_.map(timeRange, () => <StyledCell />)}
          <WeeklySchedulerProgress
            total={301}
            used={100}
            left={101}
            top={10}
            text='AM Session'
          />
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
