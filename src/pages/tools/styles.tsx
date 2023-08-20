import styled from "styled-components"
import colors from "../../styles/colors"

export const StyledArrow = styled.div`
  background-color: rgba(204, 170, 77, 0.9);
  width: 3rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 12%;
  box-shadow: 0 4px 4px rgba(255, 255, 255, 0.2);
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: ${colors.primary};
    transform: scale(1.1);
  };

  .arrow-icon {
    font-size: 50px;
    color: ${colors.black};
  };
`;

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
    margin: 0 5rem 0rem 5rem;
  }
  .slick-slider {
    margin-top: 5%;
    display: flex;
    cursor: pointer;
  };
  .active {
    border-bottom: 3px solid ${colors.primary};
    margin-bottom: 20px;
  };
  .icontext {
    display flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
