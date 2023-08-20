import styled from "styled-components"
import colors from "../../styles/colors"

export const Container = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;

  .cardInfo {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px;
    margin: 3rem 5rem 0 5rem;
  };
  .left {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30%;
    margin-right: 5rem;
  };
  .right {
    width: 70%;
  };
  .cards {
    height: 50%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
    align-items: flex-end;
  };
  .icontext {
    width: 12rem;
    height: 100%;
    display flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  };
  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem
  };
  h4 {
    font-size: 0.9rem
  };
  h1 {
    font-size: 2.5rem;
    padding: 0.8rem 0;
    color: ${colors.white}
  };
  p {
    font-size: 1.2rem;
    color: ${colors.white}
  };
  @media screen and (max-width: 1240px) {
    padding: 3rem 1.5rem 4rem 1.5rem;
`
