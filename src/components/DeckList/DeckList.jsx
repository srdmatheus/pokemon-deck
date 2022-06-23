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
          const namePokemon = pokemon.name
          const idPokemon = pokemon.url.replace(/[^0-9]/g, '').slice(1)
          const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`

          return (
            <Card name={namePokemon} id={namePokemon} image={imagePokemon} />
          )
        })}
      </>
    </DeckList>
  )
}
