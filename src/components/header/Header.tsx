import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Container } from "./styles"
import colors from '../../styles/colors'

import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const Header = () => {
  const [headerBackground, setHeaderBackground] = useState(false)
  const [clickHamburger, setClickHamburger] = useState(false)

  const checkHeader = () =>  window.scrollY >= 100 ? setHeaderBackground(true) : setHeaderBackground(false)

  useEffect(() => {
    window.addEventListener('scroll', checkHeader)
  }, [])

  const scroll = (el: HTMLElement, offset: number) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition + 60,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <Container>
      <div
        className={
          headerBackground
          ? 'headerwithbg'
          : 'headerwithoutbg'
        }
      >
        <HashLink to='/#' scroll={el => scroll(el, 150)}>
          <h1>
            Mastereloading.
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
            <HashLink to='/#about' scroll={el => scroll(el, 150)} className='link' onClick={() => { setClickHamburger(false)}} style={{fontSize: '1.5rem'}}>Sobre</HashLink>
          </li>
          <li>
            <HashLink to='/#tools' scroll={el => scroll(el, 150)} className='link' onClick={() => { setClickHamburger(false)}} style={{fontSize: '1.5rem'}}>Ferramentas</HashLink>
          </li>
          <li>
            <HashLink to='/#projects' scroll={el => scroll(el, 150)} className='link' onClick={() => { setClickHamburger(false)}} style={{fontSize: '1.5rem'}}>Projetos</HashLink>
          </li>
          <li>
            <HashLink to='/#contact' scroll={el => scroll(el, 150)} className='link' onClick={() => { setClickHamburger(false)}} style={{fontSize: '1.5rem'}}>Contato</HashLink>
          </li>
          <div className='headericons'>
            <a
              href="https://www.github.com/Mastereloading"
              target="_blank"
            >
              <FaGithubSquare className='iconsocial' size={30} style={{ color: colors.white, margin: '0 0.5rem' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/Mastereloading"
              target="_blank"
            >
              <FaLinkedin className='iconsocial' size={30} style={{ color: colors.white }} />
            </a>
          </div>
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
  