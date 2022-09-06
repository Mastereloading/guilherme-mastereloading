import styled from 'styled-components'
import colors from '../../styles/colors'

export const HeaderContainer = styled.header`
    height: 90px;
    background-color: ${colors.primary}
`
export const Container = styled.div`
    color: ${colors.white};
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center
`
