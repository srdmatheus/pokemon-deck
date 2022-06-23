import { Pokemon } from '../../services/types'
import { imageUrl } from '../../utils/imgUrl'
import { CardContent } from './styles'

function Card({ name, url }: Pokemon) {
  const id = url.replace(/[^0-9]/g, '').slice(1)

  return (
    <CardContent>
      <img src={imageUrl(id)} alt={name} />
      <span>{name}</span>
    </CardContent>
  )
}

export default Card
