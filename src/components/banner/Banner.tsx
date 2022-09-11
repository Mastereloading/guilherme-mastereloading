import { HashLink } from 'react-router-hash-link'
import adabanner from '../../assets/adabanner.jpg'
import guilhermecv from '../../assets/GuilhermeOliveiraCV.pdf'
import { BannerContainer, MaskBanner } from './styles'

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
          <div className='buttons'>
            <a className='button-dark' href={guilhermecv} download="GuilhermeOliveiraCV.pdf"> Download CV</a>
            <HashLink to="/#contact" smooth className='button-light'>Contato</HashLink>
          </div>
        </div>
    </BannerContainer>
  )
}

export default Banner
