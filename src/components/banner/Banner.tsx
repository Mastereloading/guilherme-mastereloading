import { HashLink } from 'react-router-hash-link'
import adabanner from '../../assets/adabanner.jpg'
import guilhermecv from '../../assets/GuilhermeOliveiraCV.pdf'
import { BannerContainer, MaskBanner } from './styles'

const Banner = () => {
  const scroll = (el: HTMLElement, offset: number) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition + 60,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <BannerContainer>
        <MaskBanner>
          <img className='imagebanner' src={adabanner} />
        </MaskBanner>
        <div className='content'>
          <p>Bem-vindo, Eu sou</p>
          <div style={{padding: '1.75rem 0'}}>
            <h1>Guilherme Oliveira</h1>
          </div>
          <p className='p2'>Engenheiro de Software e Designer de Aplicativos</p>
          <div className='buttons'>
            <a className='button-dark' href={guilhermecv} download="GuilhermeOliveiraCV.pdf"> Download CV</a>
            <HashLink to="/#contact" scroll={el => scroll(el, 150)} className='button-light'>Contato</HashLink>
          </div>
        </div>
    </BannerContainer>
  )
}

export default Banner
