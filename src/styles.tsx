import { createGlobalStyle } from 'styled-components'
import colors from './styles/colors'

export default createGlobalStyle`
    *{
        box-sizing: border-box
    }
    body{
        font-family: 'Arvo', serif;
        background-color: ${colors.white};
        margin: 0;
        padding: 0;
    }
`
