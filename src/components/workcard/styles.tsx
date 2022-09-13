import styled from "styled-components"
import colors from "../../styles/colors"

export const Container = styled.div`
  background: ${colors.black};
  padding: 3rem 1rem;
  border: 1px solid ${colors.white};
  border-radius: 8px;
  box-shadow: 0 8px 8px rgba(8, 8, 8, 0.2);
  .image {
    width: 100%;
  };
  .title {
    color: ${colors.white};
    padding: 1rem 0;
    font-size: 1.6rem
  };
  .details {
    align-items: center;
    display: flex;
    flex-direction: column;
    p {
      padding-bottom: 1rem;
      font-size: 1rem
    };
  };
  button {
    width: 50%;
  };
`
