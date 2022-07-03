import { pokeapiUrl } from './constants'
import { ResponseData } from './types'

export const pokemonFetch = async (limit = 50, offset = 0) => {
  const data = fetch(`${pokeapiUrl}?limit=${limit}&offset=${offset}`)
    .then((res) => res.json() as Promise<ResponseData>)
    .then((data) => {
      return data
    })

  return data
}
