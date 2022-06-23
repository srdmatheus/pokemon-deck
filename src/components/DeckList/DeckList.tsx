import { useEffect, useState } from 'react'
import { pokemonFetch } from '../../services/api'
import { Pokemon } from '../../services/types'

import { Card } from '../Card/Card'
import { DeckList } from './styles'

export function Deck() {
  const [pokemons, setPokemons] = useState<Pokemon[]>()

  async function getPokemons() {
    const { results } = await pokemonFetch()
    if (results) setPokemons(results)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <DeckList>
      {pokemons &&
        pokemons.map((pokemon) => {
          const namePokemon = pokemon.name
          const idPokemon = pokemon.url.replace(/[^0-9]/g, '').slice(1)
          const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`

          return (
            <Card name={namePokemon} id={namePokemon} image={imagePokemon} />
          )
        })}
    </DeckList>
  )
}
