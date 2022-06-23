export type Pokemon = {
  name: string
  url: string
}

export type ResponseData = {
  count: number
  next?: string
  previous?: string
  results: Pokemon[]
}
