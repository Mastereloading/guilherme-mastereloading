import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 2.75rem 0;
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
  };
  .icontext {
    display: flex;
    margin-bottom: 0.35rem
  };
  .right {
    justify-content: center;
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
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
    font-size: 1rem
  };
  a {
      color: colors.white;
      margin: 0 1rem 0 0;
  };
  .iconsocial {
    &:hover {
      cursor: pointer;
    }
  };
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    .left, .right {
      align-items: center;
      text-align: center;
    };
    P {
      text-align: center;
      margin: 0 5px 0 5px;
    };
  }
`