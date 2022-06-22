import { CardPokemon } from './styles'

export function Card() {
  const pokemons = [
    {
      id: 1,
      name: 'nome do bixo',
      picture:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 2,
      name: 'nome do animal',
      picture:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 3,
      name: 'nome do sujeito',
      picture:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 4,
      name: 'nome do animal',
      picture:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 5,
      name: 'nome do animal',
      picture:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 6,
      name: 'nome do animal',
      picture:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    }
  ]

  return pokemons.map(pokemon => {
    return (
      <CardPokemon key={pokemon.id}>
        <img src={pokemon.picture} alt={pokemon.name} />
        <span>{pokemon.name}</span>
      </CardPokemon>
    )
  })
}
