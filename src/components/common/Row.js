import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify}) => justify || 'center'};
  align-items: ${({align}) => align || 'center'};
`