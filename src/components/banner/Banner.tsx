import { BannerContainer, MaskBanner } from './styles'

import adabanner from '../../assets/adabanner.jpg'
import { HashLink } from 'react-router-hash-link'

const Banner = () => {
  return (
    <BannerContainer>
        <MaskBanner>
          <img className='imagebanner' src={adabanner} />
        </MaskBanner>
        <div className='content'>
          <p>Bem-vindo, Eu sou</p>
          <h1>Guilherme Oliveira</h1>
          <p className='p2'>Engenheiro de Software e Designer de Aplicativos</p>
          <div>
            <HashLink to="/#projects" smooth className='button-dark'>Projetos</HashLink>
            <HashLink to="/#contact" smooth className='button-light'>Contato</HashLink>
          </div>
        </div>
    </BannerContainer>
  )
}

export default Banner
