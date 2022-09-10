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
        text-shadow: 1px 1px #080808;
        text-decoration: none;
    };
    ul {
        list-style-type: none;
    };
    .button-dark {
        padding: 12px 32px;
        font-size: 1rem;
        text-transform: uppercase;
        background: ${colors.primary};
        color: ${colors.black};
        border: 1px solid ${colors.white};
        font-weight: 600;
        cursor: pointer;
        &:hover {
            background: rgba(247, 247, 247, 0.2);
            color: ${colors.white};
            transition: 0.3s
        }
    };
    .button-light {
        background:transparent;
        color: ${colors.white};
        padding: 12px 32px;
        font-size: 1rem;
        text-transform: uppercase;
        border: 1px solid ${colors.white};
        font-weight: 600;
        cursor: pointer;
        &:hover {
            background: rgba(247, 247, 247, 0.2);
            color: ${colors.white};
            transition: 0.3s
        }
    }
`
