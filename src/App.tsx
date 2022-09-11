import GlobalStyle from './styles/styles'
import HomeScreen from './pages/home/HomeScreen'
import PopUpBox from './components/popup/PopUpBox'

function App() {
  return ( 
    <div>
      <GlobalStyle />
      <HomeScreen />
      <PopUpBox />
    </div>
  )
}

export default App
