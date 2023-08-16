import styled from "styled-components"
import colors from "../../styles/colors"

export const Container = styled.div`
  width: 100%;
  background: ${colors.black};
  margin: auto;
  padding: 6rem 8rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: 5rem;
    };
    .skills {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px;
      h3 {
        margin-bottom: 0.5rem
      };
      h4 {
        font-size: 0.9rem
      };
      .icontext {
        padding: 0rem 1rem 1rem 0;
        width: 100%;
      };
    };
    h1 {
      font-size: 2.5rem;
      padding: 0.8rem 0;
      color: ${colors.white}
    };
    p {
      font-size: 1.2rem;
      color: ${colors.white}
    }
  @media screen and (max-width: 1240px) {
    padding: 3rem 1.5rem 4rem 1.5rem;
`
