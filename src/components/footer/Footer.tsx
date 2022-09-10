import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { Container, FooterContainer } from './styles'
import colors from '../../styles/colors'

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <div className="left">
          <div className="icontext">
            <FaHome size={20} style={{ color: colors.white, marginRight: '2rem' }} />
            <h4>Santo André - SP</h4>
          </div>
          <div className="icontext">
            <FaPhone size={20} style={{ color: colors.white, marginRight: '2rem' }} />
            <h4>(11) 92003-1173</h4>
          </div>
          <div className="icontext">
            <FaMailBulk size={20} style={{ color: colors.white, marginRight: '2rem' }} />
            <h4>guilherme-lamon@hotmail.com</h4>
          </div>
        </div>
        <div className='right'>
          <h3>Mais sobre mim</h3>
          <p>
            Aluno de ciências da computação e a todo momento procurando estudar novas tecnologias, envie uma mensagem para discutirmos novos projetos!
          </p>
          <div className='social'>
            <a
              href="https://www.github.com/Mastereloading"
              target="_blank"
            >
              <FaGithubSquare className='iconsocial' size={30} style={{ color: colors.white, marginRight: '1rem' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/Mastereloading"
              target="_blank"
            >
              <FaLinkedin className='iconsocial' size={30} style={{ color: colors.white, marginRight: '1rem' }} />
            </a>
          </div>
        </div>
      </FooterContainer>
    </Container>
  )
}

export default Footer
