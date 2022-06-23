import { useEffect, useState } from 'react'
import { api } from '../../services/api/api'
import { Card } from '../Card/Card'
import { DeckList } from './styles'

export function Deck() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setPokemons(data.results))
  }, [])

  return (
    <DeckList>
      <>
        {pokemons.map(pokemon => {
          return <Card {...pokemon} />
        })}
      </>
    </DeckList>
  )
}
