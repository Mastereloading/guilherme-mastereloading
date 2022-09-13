import WorkCard from "../../components/workcard/WorkCard"
import { Container } from "./styles"

import project1 from '../../assets/workcardimage/project1.png'
import project2 from '../../assets/workcardimage/project2.png'
import project3 from '../../assets/workcardimage/project3.png'

const Projects = () => {
  const cardsData = [{
      image: project1,
      title: 'Portfólio',
      description: 'Este próprio site já é um dos meus projetos, me desafiei a criar um portfólio em 1 semana e o resultado você está acompanhando agora. (Continuarei editando ele, pretendo implementar algum banco de dados e adicionar algumas APIs...)',
      linkto: 'https://github.com/Mastereloading/guilherme-mastereloading'
    }, {
      image: project2,
      title: 'Coup - Mobile Card Game',
      description: 'Amo jogar este jogo de cartas, porém não existe nenhuma versão dele para celular, então resolvi criar uma própria, assim aperfeiçoo meus trabalhos de design e ainda ganho um jogo novo. (Projeto em desenvolvimento)',
      linkto: 'https://github.com/Mastereloading/coup-app'
    }, {
      image: project3,
      title: 'EM BREVE',
      description: 'Qualquer outra atualização ou projeto novo será postado aqui...',
      linkto: ''
    }
  ]

  return (
    <Container id='projects'>
      <h1>Alguns projetos</h1>
      <div className="cards">
        {cardsData.map((data, key) => {
          return (
            <WorkCard
              key={key}
              data={data}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Projects
