import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  min-width: 10.3rem;
  width: auto;
  height: 3.1rem;
  letter-spacing: 0.2rem;
  line-height: 3.1rem;
  padding: 0 2.1rem 0 2.1rem;
  font-size: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #f96167;
  color: white;
  border: none;

  &:hover {
    background-color: #fff;
    color: black;
    border: none;
  }

  @media screen and (max-width: 800px) {
    min-width: 5rem;
    height: 2rem;
    padding: 0 1rem 0 1rem;
    align-items: center;
  }
`;
