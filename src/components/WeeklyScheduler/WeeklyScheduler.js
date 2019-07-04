import React from 'react';

import {
  StyledTable,
  StyledRow,
  StyledColumnHeader,
  StyledRowHeader,
  StyledCell,
  StyledRowContent,
} from './WeeklySchedulerStyled'
import WeeklySchedulerProgress from './WeeklySchedulerProgress'

const WeeklyScheduler = () => {
  return (
    <StyledTable>
      <StyledRow>
        <StyledColumnHeader/>
        <StyledColumnHeader>
          08.00
        </StyledColumnHeader>
        <StyledColumnHeader>
          09.00
        </StyledColumnHeader>
        <StyledColumnHeader>
          10.00
        </StyledColumnHeader>
        <StyledColumnHeader>
          11.00
        </StyledColumnHeader>
      </StyledRow>
      <StyledRow>
        <StyledRowContent>
          <StyledCell>
            <StyledRowHeader>
              MON
              <div>
                06/07
              </div>
            </StyledRowHeader>
          </StyledCell>
          <StyledCell />
          <StyledCell />
          <StyledCell />
          <StyledCell />
        </StyledRowContent>
      </StyledRow>
      <StyledRow>
        <StyledRowContent>
          <StyledCell>
            <StyledRowHeader>
              TUE
              <div>
                07/07
              </div>
            </StyledRowHeader>
          </StyledCell>
          <StyledCell />
          <StyledCell />
          <StyledCell />
          <StyledCell />
          <WeeklySchedulerProgress
            total={301}
            used={100}
            left={151}
            top={15}
            text='AM Session'
          />
        </StyledRowContent>
      </StyledRow>
      <StyledRow>
        <StyledRowContent>
          <StyledCell>
            <StyledRowHeader>
              WED
              <div>
                08/07
              </div>
            </StyledRowHeader>
          </StyledCell>
          <StyledCell />
          <StyledCell />
          <StyledCell />
          <StyledCell />
        </StyledRowContent>
      </StyledRow>
    </StyledTable>
  );
};

export default WeeklyScheduler;
