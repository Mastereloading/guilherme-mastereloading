import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  width: 100%;
  padding: 4rem 0;
  background-color: rgba(8, 8, 8);
`

export const FooterContainer = styled.div`
  max-width: 1140px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  .left {
    justify-content: center;
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem
  };
  .icontext {
    display: flex;
    margin-bottom: 0.5rem
  };
  .right {
    justify-content: center;
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem
  };
  .social {
    margin-top: 1rem
  };
  h3 {
    font-size: 1.8rem;
    padding-bottom: 0.7rem
  };
  h4 {
    font-size: 1.2rem;
    padding-bottom: 0.7rem
  };
  p {
    font-size: 1.2rem
  };
  .iconsocial {
    &:hover {
      cursor: pointer;
    }
  };
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr
  }
`