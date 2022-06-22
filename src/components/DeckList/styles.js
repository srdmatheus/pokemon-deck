import styled from 'styled-components'

export const DeckList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    font-weight: bold;
  }
`
