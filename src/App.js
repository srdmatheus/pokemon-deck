import { Deck } from './components/DeckList/DeckList'
import { Container } from './styles'

export function App() {
  return (
    <Container>
      <h1> Pokemon Deck</h1>
      <Deck />
    </Container>
  )
}
