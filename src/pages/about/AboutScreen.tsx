import Page from '../../components/page/Page'
import { Container } from './styles'
import eu from '../../assets/eu.jpeg'

const About = () => {
  return (
    <div id='about'>
      <Page background='black'>
        <Container>
          <div className='left'>
            <div className='title'>
              <h1>
                Sobre mim
              </h1>
              <p>
              Aluno de ciências da computação e desde criança interessado por esta área, a todo momento procuro estar estudando novas tecnologias para não estagnar e estou sempre empolgado para pensar e agir fora da caixa.
              </p>
            </div>
          </div>
          <div className='right'>
            <img className='image' src={eu} />
          </div>
        </Container>
      </Page>
    </div>
  )
}

export default About
