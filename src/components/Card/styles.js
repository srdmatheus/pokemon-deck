import styled from 'styled-components'

export const CardContent = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;

  background-color: #fff;

  img {
    width: 8.5rem;
    height: auto;
  }

  span {
    padding: 1rem;
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;

    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    background-color: #ccc;
  }
`
