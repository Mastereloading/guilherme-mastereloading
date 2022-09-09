import { createGlobalStyle } from 'styled-components'
import colors from './styles/colors'

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    };
    body{
        font-family: 'Arvo', serif;
        background-color: ${colors.black};

    };
    h1, h2, h3, h4, p, a {
        color: ${colors.tertiary};
        text-decoration: none;
    };
    ul {
        list-style-type: none;
    };
    button {
        padding: 12px 32px;
        font-size: 1rem;
        text-transform: uppercase;
        background: ${colors.primary};
        color: ${colors.black};
        border: 1px solid ${colors.white};
        font-weight: 600;
        cursor: pointer
    };
    .button-light {
        background:transparent;
        color: ${colors.white}
    };
    button:hover {
        background: rgba(249, 249, 249, 0.2);
        color: ${colors.white};
        transition: 0.3s
    }
`
