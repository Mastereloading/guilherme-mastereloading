import { FaReact, FaAndroid, FaNode } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
// import { Container } from './styles'

const Tools = () => {
  return (
    <div id='tools'>
      {/* <Container> */}
        <div className='left'>
          <div className='skills'>
            <div className="icontext">
              <FaReact size={40} style={{ color: '#6FC7E8', marginBottom: '0.5rem' }} />
              <h3 style={{ color: '#6FC7E8' }}>React</h3>
              <h4>Três anos de especialização em React, acredito que ainda é a melhor ferramenta para desenvolvimento desktop.</h4>
            </div>
            <div className="icontext">
              <FaAndroid size={40} style={{ color: '#92B83D', marginBottom: '0.5rem' }} />
              <h3 style={{ color: '#92B83D' }}>React Native</h3>
              <h4>Criação e publicação de aplicativos na Apple Store (Xcode) e Play Store (Android Studio).</h4>
            </div>
            <div className="icontext">
              <FaNode size={40} style={{ color: '#337638', marginBottom: '0.5rem' }} />
              <h3 style={{ color: '#337638' }}>NodeJS</h3>
              <h4>Para desenvolvimento back-end busco continuar na ferramenta do JavaScript porém em algumas aplicações é necessária a utilização do Python.</h4>
            </div>
            <div className="icontext">
              <SiFirebase size={40} style={{ color: '#F2BD39', marginBottom: '0.5rem' }} />
              <h3 style={{ color: '#F2BD39' }}>Firebase</h3>
              <h4>Já estudei AWS porém a maioria dos projetos utilizo o banco de dados da Google (Firebase) e suas ferramentas, para projetos mais antigos tenho conhecimento de SQL.</h4>
            </div>
          </div>
        </div>
      {/* </Container> */}
    </div>
  )
}

export default Tools
