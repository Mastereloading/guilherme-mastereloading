import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 40rem;
  padding: 0 15rem 0 15rem;
  align-items: center;
  justify-content: center;
  height: 40rem;
  @media screen and (max-width: 1040px) {
    padding: 0 5rem 0 5rem;
  };
  @media screen and (max-width: 640px) {
    padding: 0;
  }
`