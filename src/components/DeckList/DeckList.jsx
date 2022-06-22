import { useEffect, useState } from 'react'
import { api } from '../../services/api/api'
import { Card } from '../Card/Card'
import { DeckList } from './styles'

export function Deck() {
  // const pokemons = [
  //   {
  //     id: 1,
  //     name: 'nome do bixo',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  //   },
  //   {
  //     id: 2,
  //     name: 'nome do animal',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  //   },
  //   {
  //     id: 3,
  //     name: 'nome do sujeito',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  //   },
  //   {
  //     id: 4,
  //     name: 'nome do animal',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  //   },
  //   {
  //     id: 5,
  //     name: 'nome do animal',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  //   },
  //   {
  //     id: 6,
  //     name: 'nome do animal',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  //   }
  // ]

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log(data.results[0])
        setPokemons(data.results)
      })
  }, [])

  return (
    <DeckList>
      <div>
        {pokemons.map(pokemon => {
          return <Card {...pokemon} />
        })}
      </div>
    </DeckList>
  )
}
