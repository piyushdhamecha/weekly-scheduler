import React from 'react';

import { StyledContainer } from './AppStyled'

import WeeklyScheduler from './components/WeeklyScheduler'

import mockData from './mockData'

function App() {
  return (
    <StyledContainer>
      <WeeklyScheduler
        startTime={mockData.startTime}
        endTime={mockData.endTime}
        startDate={mockData.startDate}
        endDate={mockData.endDate}
      />
    </StyledContainer>
  );
}

export default App;
