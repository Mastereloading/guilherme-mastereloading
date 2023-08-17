import styled from "styled-components"
import colors from "../../styles/colors"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 5rem 0;
  .cards {
    max-width: 1240px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  };
  h1 {
    color: ${colors.primary};
    padding 0rem 0 2.5rem 0;
    font-size: 2.5rem
  };
  @media screen and (max-width: 1240px) {
    .cards {
      max-width: 90%;
      margin: auto;
  
      grid-template-columns: 1fr;
    }
  }
`