import { Container } from './styles'
import colors from '../../styles/colors'

const Page = (props: any) => {
  return (
    <Container style={{ ...props.style, backgroundColor: props.background === 'black' ? colors.black : colors.secondary }}>
      {
        props.children
      }
    </Container>
  )
}

export default Page
