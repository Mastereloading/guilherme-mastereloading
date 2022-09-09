import styled from 'styled-components'
import colors from '../../styles/colors'

export const MenuContainer = styled.nav`
    ul{
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        justify-content: end;
        align-items: center;
        li{
            font-size: 30px;
            margin-left: 15px;
            margin-right: 15px;
            cursor: pointer;
            transition-duration: 1.5s;
            &:hover{
                color: ${colors.tertiary};
                transition-duration: 0.5s
            }
        }
    }
`
