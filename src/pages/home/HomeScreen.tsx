import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'

import About from '../about/AboutScreen'
import Projects from '../projects/ProjectsScreen'
import Contact from '../contact/ContactScreen'

import colors from '../../styles/colors'

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Contact />
      {/* <div
        style={{
          backgroundColor: colors.black
        }}
      >
        <h1>Guilherme Mastereloading</h1>
        <a href="https://github.com/Mastereloading"  target="blank">Github</a>
      </div> */}
    </div>
  )
}

export default Home
