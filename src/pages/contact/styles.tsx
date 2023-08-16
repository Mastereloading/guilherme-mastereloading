import styled from "styled-components"
import colors from "../../styles/colors"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  background: ${colors.secondary};
  padding: 5rem 12rem 0rem 12rem;
  margin: auto;
  height: 40rem;
  width: 100%;
  background-image: -webkit-linear-gradient(-20deg, ${colors.black} 40%, ${colors.secondary} 40.5%);

  .text {
    display: flex;
    flex-direction: column;
    padding: 4rem;
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
  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
    textarea {
      margin-bottom: 1rem;
      padding: 15px 15px;
      font-size: 1.2rem;
      background-color: ${colors.white};
      border-color: ${colors.black};
      border-radius: 6px;
      box-shadow: 0 8px 8px rgba(8, 8, 8, 0.2);
      color: ${colors.black}
    }
  };
  .button-light {
    box-shadow: 0 8px 8px rgba(8, 8, 8, 0.2);
    background: ${colors.black};
    &:hover {
      background: rgba(8, 8, 8, 0.8);
      color: ${colors.white};
      transition: 0.3s
    }
  };
  @media screen and (max-width: 1040px) {
    grid-template-columns: 1fr;
    padding: 1rem 3rem;
    .text {
      margin-left: 0;
      text-align: center
    }
  }
`
