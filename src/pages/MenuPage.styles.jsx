import styled from "styled-components";

export const MenuPageContainer = styled.div`
  display: grid;
  background-image: linear-gradient(to bottom right, #fcb07d, #fce77d);
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1400px) {
    padding: 0.6rem;
    width: 100vw;
  }

  @media screen and (max-width: 450px) {
    padding: 0.6rem;
    width: 100vw;
  }
`;
