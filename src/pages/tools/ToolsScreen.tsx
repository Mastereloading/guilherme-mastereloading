import Page from '../../components/page/Page'
import { FaReact, FaAndroid, FaNode, FaVuejs } from 'react-icons/fa'
import { SiFirebase, SiNeo4J } from 'react-icons/si'
import { Container, StyledArrow } from './styles'
import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Tools = () => {
  const [activeCarousel, setActiveCarousel] = useState(0)

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
    },
    {
      tool: 'Neo4j',
      description: 'Seis meses de estudo no banco de dados SQL Neo4j.',
      icon: <SiNeo4J></SiNeo4J>,
      iconColor: '#4581C3'
    }
  ]

  const handleArrowClick = (value: number) => {
    setTimeout(() => {
      if (activeCarousel + value < 0) {
        setActiveCarousel(cardsData.length - 1)
      } else if (activeCarousel + value > cardsData.length - 1) {
        setActiveCarousel(0)
      } else {
        setActiveCarousel(activeCarousel + value)
      }
      console.log(activeCarousel)
    }, 500)
  }

  const CustomPrevArrow = ({ ...props }) => (
      <div onClick={() => handleArrowClick(-1)}>
    <StyledArrow style={{ position: 'absolute', top: '45%', left: '-3.9%', transform: 'translateY(-45%)' }} onClick={props.onClick}>
        <span className="arrow-icon">{"<"}</span>
    </StyledArrow>
      </div>
  );

  const CustomNextArrow = ({ ...props }) => (
    <div onClick={() => handleArrowClick(1)}>
      <StyledArrow style={{ position: 'absolute', top: '45%', right: '-3.9%', transform: 'translateY(-45%)' }} onClick={props.onClick}>
        <span className="arrow-icon">{">"}</span>
      </StyledArrow>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: Number((Number(window.innerWidth) <= 640) ? 1 : (Number(window.innerWidth) <= 1240) ? 3 : 5),
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  }

  return (
    <div id='tools'>
      <Page background='black'>
        <Container>
          <div className='cardInfo'>
            <div className='left'>
              {React.cloneElement(cardsData[activeCarousel].icon, { color: cardsData[activeCarousel].iconColor, size: 275})}
            </div>
            <div className='right'>
              <h1>{cardsData[activeCarousel].description}</h1>
            </div>
          </div>
          <div className='cards'>
            <Slider {...settings}>
              {cardsData.map((data, key) => (
                <div className={activeCarousel === key ? 'active icontext' : 'icontext'} key={key} onClick={() => setActiveCarousel(key)}>
                  {React.cloneElement(data.icon, { color: data.iconColor, size: 75, style: { margin: '1.2rem' }})}
                  <h3 style={{ color: data.iconColor }}>{ data.tool }</h3>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </Page>
    </div>
  )
}

export default Tools
