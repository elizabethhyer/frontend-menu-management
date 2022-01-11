import styled from "styled-components";

export const MenuPageContainer = styled.div`
  display: grid;

  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 1400px) {
    padding: 0.6rem;
    width: 100vw;
  }

  @media screen and (max-width: 450px) {
    padding: 0.6rem;
    width: 100vw;
  }
`;
