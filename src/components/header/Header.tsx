import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Container } from "./styles"
import colors from '../../styles/colors'

const Header = () => {
  const [headerBackground, setHeaderBackground] = useState(false)
  const [clickHamburger, setClickHamburger] = useState(false)

  const checkHeader = () =>  window.scrollY >= 100 ? setHeaderBackground(true) : setHeaderBackground(false)

  useEffect(() => {
    window.addEventListener('scroll', checkHeader)
  }, [])

  return (
    <Container>
      <div
        className={
          headerBackground
          ? 'headerwithbg'
          : 'headerwithoutbg'
        }
      >
        <Link to='/'>
          <h1>
            Mastereloading
          </h1>
        </Link>
        <ul
          className={
            clickHamburger
            ? 'liston'
            : 'listoff'
          }
        >
          <li>
            <Link to='/' className='link'>Home</Link>
          </li>
          <li>
            <Link to='/about' className='link'>About</Link>
          </li>
          <li>
            <Link to='about' className='link'>Projects</Link>
          </li>
          <li>
            <Link to='/contact' className='link'>Contact</Link>
          </li>
        </ul>
        <div className='hamburger' onClick={() => { setClickHamburger(!clickHamburger)}}>
          {
            clickHamburger
            ? <FaTimes size={30} style={{ color: colors.white }} />
            : <FaBars size={30} style={{ color: colors.white }} />
          }
        </div>
      </div>
    </Container>
  )
}
  
export default Header
  