import { CardContent } from './styles'
import { CardProps } from './types'

function Card(props: CardProps) {
  const { id, name, image } = props
  return (
    <CardContent key={id}>
      <img src={image} alt={name} />
      <span>{name}</span>
    </CardContent>
  )
}

export default Card
