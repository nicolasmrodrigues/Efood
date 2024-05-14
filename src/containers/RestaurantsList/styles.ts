import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin: 80px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
