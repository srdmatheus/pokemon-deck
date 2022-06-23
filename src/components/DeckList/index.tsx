import { useEffect, useState } from 'react'
import { pokemonFetch } from '../../services/api'
import { Pokemon } from '../../services/types'

import Card from '../Card'
import { Container } from './styles'

function DeckList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>()

  async function getPokemons() {
    const { results } = await pokemonFetch()
    if (results) setPokemons(results)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <Container>
      {pokemons &&
        pokemons.map((pokemon, index) => {
          return <Card key={index} {...pokemon} />
        })}
    </Container>
  )
}

export default DeckList
