import Header from '../components/header/Header'
import colors from '../styles/colors'

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          backgroundColor: colors.white
        }}
      >
        <h1>Guilherme Mastereloading</h1>
        <a href="https://github.com/Mastereloading"  target="blank">Github</a>
      </div>
    </div>
  )
}

export default Home
