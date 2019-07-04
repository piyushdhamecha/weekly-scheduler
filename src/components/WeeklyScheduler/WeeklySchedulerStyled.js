import styled from 'styled-components'

const CELL_WIDTH = 150

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledColumnHeader = styled.div`
  display: flex;
  min-height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  width: ${CELL_WIDTH}px;
`

export const StyledRowHeader = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  width: ${CELL_WIDTH}px;
`

export const StyledCell = styled.div`
  display: flex;
  width: ${CELL_WIDTH}px;
`

export const StyledRow = styled.div`
  display: flex;
  border-bottom: 1px dashed silver;

  & ${StyledColumnHeader} ~ ${StyledColumnHeader}, 
  ${StyledCell} ~ ${StyledCell} {
    border-left: 1px dashed silver;
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
  height: 100%;
  font-weight: 600;
  color: #fff;
`
