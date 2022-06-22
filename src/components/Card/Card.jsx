import { CardContent } from './styles'

export function Card() {
  const pokemons = [
    {
      id: 1,
      name: 'nome do bixo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 2,
      name: 'nome do animal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 3,
      name: 'nome do sujeito',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 4,
      name: 'nome do animal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 5,
      name: 'nome do animal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 6,
      name: 'nome do animal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    }
  ]

  return pokemons.map(pokemon => {
    return (
      <CardContent key={pokemon.id}>
        <img src={pokemon.image} alt={pokemon.name} />
        <span>{pokemon.name}</span>
      </CardContent>
    )
  })
}
