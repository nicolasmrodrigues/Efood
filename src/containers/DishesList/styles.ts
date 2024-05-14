import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px 0 120px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
