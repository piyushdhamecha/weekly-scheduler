import styled from 'styled-components'

import {
  CELL_WIDTH,
  ROW_HEADER_WIDTH,
} from '../../constants'


export const StyledColumnHeaderWrapper = styled.div`
  display: flex;
  min-height: 60px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  color: gray;
  position: relative;
`

export const StyledColumnHeader = styled.div`
  position: absolute;
  ${({ left }) => left && `left: ${left}px;`};
`

export const StyledRowHeader = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  width: ${ROW_HEADER_WIDTH}px;
`

export const StyledRowSubHeader = styled.div`
  font-size: 16px;
  color: gray;
`

export const StyledCell = styled.div`
  display: flex;
  width: ${({ width = CELL_WIDTH }) => width}px;
  border-right: 1px dashed silver;
`

export const StyledRow = styled.div`
  display: flex;
`


export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;

  & ${StyledRow} ~ ${StyledRow} {
    border-bottom: 1px dashed silver;
  }
`

export const StyledProgressContainer = styled.div`
  display: flex;
  position: absolute;
  width: ${({ width = 50 }) => width}px;
  height: 40px;
  left: ${({ left = 0 }) => left}px;
  top: ${({ top = 0 }) => top}px;
`

export const StyledProgress = styled.div`
  display: flex;
  position: absolute;
  background: ${({ background = 'yellow' }) => background};
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  left: ${({ left = 0 }) => left}px;
  width: ${({ width = 50 }) => width}px;
`

export const StyledRowContent = styled.div`
  display: flex;
  position: relative;
`

export const StyledProgressText = styled.div`
  display: flex;
  width: ${({ width=50 }) => width}px;
  z-index: 3;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #fff;
`
