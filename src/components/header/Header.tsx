import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
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
        <HashLink to='/#' smooth>
          <h1>
            Mastereloading
          </h1>
        </HashLink>
        <ul
          className={
            clickHamburger
            ? 'liston'
            : 'listoff'
          }
        >
          <li>
            <HashLink to='/#projects' smooth className='link'>Projetos</HashLink>
          </li>
          <li>
            <HashLink to='/#about' smooth className='link'>Sobre mim</HashLink>
          </li>
          <li>
            <HashLink to='/#contact' smooth className='link'>Contato</HashLink>
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
  