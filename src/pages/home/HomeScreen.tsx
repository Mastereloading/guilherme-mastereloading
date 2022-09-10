import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Projects from '../projects/ProjectsScreen'
import About from '../about/AboutScreen'
import Contact from '../contact/ContactScreen'
import Footer from '../../components/footer/Footer'
import colors from '../../styles/colors'

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div
        style={{
          backgroundColor: colors.white
        }}
      >
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home
