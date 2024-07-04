import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import About from '../about/AboutScreen'
import Tools from '../tools/ToolsScreen'
// import Projects from '../projects/ProjectsScreen'
import Contact from '../contact/ContactScreen'
import Footer from '../../components/footer/Footer'
import colors from '../../styles/colors'
import { BrowserRouter } from 'react-router-dom'

const Home = () => {
  return (
    <BrowserRouter>
      <div className="App"  id='/#'>
        <Header />
        <Banner />
        <div
          style={{
            backgroundColor: colors.white
          }}
          >
          <About />
          <Tools />
          {/* <Projects /> */}
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Home
