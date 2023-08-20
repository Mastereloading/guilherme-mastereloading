import Page from '../../components/page/Page'
import { FaReact, FaAndroid, FaNode, FaVuejs } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import { Container } from './styles'
import React from 'react'

const Tools = () => {
    const cardsData = [{
        tool: 'React',
        description: 'Três anos de especialização em React, acredito que ainda é a melhor ferramenta para desenvolvimento desktop.',
        icon: <FaReact></FaReact>,
        iconColor: '#6FC7E8'
      },
      {
        tool: 'VueJS',
        description: 'Seis meses de estudo no framework VueJS.',
        icon: <FaVuejs></FaVuejs>,
        iconColor: '#42b883'
      },
      {
        tool: 'React Native',
        description: 'Criação e publicação de aplicativos na Apple Store (Xcode) e Play Store (Android Studio).',
        icon: <FaAndroid></FaAndroid>,
        iconColor: '#92B83D'
      },
      {
        tool: 'NodeJS',
        description: 'Para desenvolvimento back-end busco continuar na ferramenta do JavaScript porém em algumas aplicações é necessária a utilização do Python.',
        icon: <FaNode></FaNode>,
        iconColor: '#337638'
      },
      {
        tool: 'Firebase',
        description: 'Já estudei AWS porém a maioria dos projetos utilizo o banco de dados da Google (Firebase) e suas ferramentas, para projetos mais antigos tenho conhecimento de SQL.',
        icon: <SiFirebase></SiFirebase>,
        iconColor: '#F2BD39'
      }
    ]

  return (
    <div id='tools'>
      <Page background='black'>
        <Container>
          <div className='cardInfo'>
            <div className='left'>
              <FaReact size={275} color='#6FC7E8' />
            </div>
            <div className='right'>
              <h1>Três anos de especialização em React, acredito que ainda é a melhor ferramenta para desenvolvimento desktop.</h1>
            </div>
          </div>
          <div className='cards'>
            {cardsData.map((data, key) => {
              return (
                <div className="icontext" key={key}>
                  {React.cloneElement(data.icon, { color: data.iconColor, size: 75, style: { margin: '1.2rem' }})}
                  <h3 style={{ color: data.iconColor }}>{ data.tool }</h3>
                  {/* <h4>{ data.description }</h4> */}
                </div>
              )
            })}
          </div>
        </Container>
      </Page>
    </div>
  )
}

export default Tools