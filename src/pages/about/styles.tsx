import styled from "styled-components"
import colors from "../../styles/colors"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  width: 100%;
  background: ${colors.black};
  margin: auto;
  padding: 6rem 8rem;
  .left {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    .title {
      margin-bottom: 5rem;
    };
    .skills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 40px;
      h3 {
        margin-bottom: 0.5rem
      };
      h4 {
        font-size: 12px
      };
      .icontext {
        padding: 0rem 1rem 0 0;
        width: 100%;
      };
    };
    h1 {
      font-size: 2.5rem;
      padding: 0.8rem 0;
      color: ${colors.white}
    };
    p {
      font-size: 1.0rem;
      color: ${colors.white}
    }
  };
  .right {
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 600px;
    margin: auto;
    .image {
      border-radius: 100%;
      border: 2px solid ${colors.white};
      box-shadow: 0 8px 8px rgba(255, 255, 255, 0.2);
      width: 70%;
      height: 70%;
      background-size: cover;
      background-position: cover;
      object-fit: cover
    }
  };
  @media screen and (max-width: 1240px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.5rem;
    .left {
      width: 100%;
      margin-left: 0;
      .skills {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
      };
    }
    .right {
      display: none
    }
  }
`
