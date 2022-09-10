import { BannerContainer, MaskBanner } from './styles'

import adabanner from '../../assets/adabanner.jpg'
import { Link } from 'react-router-dom'

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
            <Link to="/projects" className='button-dark'>Projetos</Link>
            <Link to="/contact" className='button-light'>Contato</Link>
          </div>
        </div>
    </BannerContainer>
  )
}

export default Banner
