import { CardContent } from './styles'

export function Card(props) {
  return (
    <CardContent key={props.id}>
      <img src={props.image} alt={props.name} />
      <span>{props.name}</span>
    </CardContent>
  )
}
