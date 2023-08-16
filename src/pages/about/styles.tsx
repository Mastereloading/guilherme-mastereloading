import styled from "styled-components"
import colors from "../../styles/colors"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  margin: auto;
  padding: 6rem 8rem;
  background-image: -webkit-linear-gradient(-20deg, ${colors.secondary} 55%, ${colors.black} 55.5%);

  .left {
    justify-content: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
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
        padding: 0rem 1rem 0 0;
        width: 100%;
      };
    };
    h1 {
      font-size: 2.5rem;
      padding: 0.8rem 0;
      color: ${colors.black}
    };
    p {
      font-size: 1.2rem;
      color: ${colors.black}
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
      border: 2px solid ${colors.black};
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
    padding: 3rem 1.5rem 4rem 1.5rem;
    .left {
      width: 100%;
      margin-left: 0;
      .title {
        margin-bottom: 3rem;
      };
      .skills {
        grid-gap: 20px;
      };
    }
  }
`
