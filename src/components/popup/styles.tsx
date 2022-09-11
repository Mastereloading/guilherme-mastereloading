import styled from 'styled-components'
import colors from '../../styles/colors'

export const PopUpBoxContainer = styled.div`
  h1 {
    color: ${colors.primary};
    padding: 1rem 0rem;
  };
  p {
    color: ${colors.black}
  };
  .p2 {
    font-size: 9px;
    padding: 14px
  };
  .boxup {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 200px;
    height: 250px;
    background: ${colors.white};
    border-radius: 8px;
    box-shadow: 0 6px 6px rgba(8, 8, 8, 0.2);
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0px 60px 40px 0px;
    transition: 3s;
    z-index: 1px;
  };
  .boxdown {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 200px;
    height: 250px;
    background: ${colors.white};
    border-radius: 8px;
    box-shadow: 0 6px 6px rgba(8, 8, 8, 0.2);
    position: fixed;
    bottom: 0;
    right: -100%;
    margin: 0px 60px 40px 0px;
    transition: 3s;
    z-index: 1px;
  };
  .exitbutton {
    position: absolute;
    margin: 10px 10px 0 0;
    right: 0;
    top: 0
  };
  .text {
    margin: 10px 0 0 0;
    text-align: center;
    display: flex;
    flex-direction: column;
  };
  @media screen and (max-width: 640px) {
    .exitbutton {
      position: absolute;
      margin: 5px 5px 0 0;
      right: 0;
      top: 0
    };
    h1 {
      font-size: 15px;
      color: ${colors.primary};
    };
    p {
      font-size: 8px;
      color: ${colors.black}
    };
    .p2 {
      display: none
    };
    .text {
      // margin: px 0 0 0;
      text-align: center;
      display: flex;
      flex-direction: column;
    };
    .boxup {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      width: 100px;
      height: 125px;
      background: ${colors.white};
      border-radius: 8px;
      box-shadow: 0 6px 6px rgba(8, 8, 8, 0.2);
      position: fixed;
      bottom: 0;
      right: 0;
      margin: 0px 15px 10px 0px;
      transition: 3s;
      z-index: 1px;
    };
    .boxdown {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      width: 100px;
      height: 125px;
      background: ${colors.white};
      border-radius: 8px;
      box-shadow: 0 6px 6px rgba(8, 8, 8, 0.2);
      position: fixed;
      bottom: 0;
      right: -100%;
      margin: 0px 15px 10px 0px;
      transition: 3s;
      z-index: 1px;
    };
  }
`