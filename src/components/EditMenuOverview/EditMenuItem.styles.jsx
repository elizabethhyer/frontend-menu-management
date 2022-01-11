import styled from "styled-components";

export const EditMenuItemsContainer = styled.div`
width 60vw;
display: flex;
flex-direction: column;
height: 30rem;
align-items: center;
position: relative;
padding: 2rem;
cursor: pointer;

@media screen and (max-width: 800px) {
 padding: .6rem;
 width 85vw;
}
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 3px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  filter: drop-shadow(0 3px 0.4rem black);
  margin-bottom: 1rem;
`;

export const TextInput = styled.input`
  background: none;
  background-color: transparent;
  font-family: "Lato", sans-serif;
  color: black;
  display: block;
  width: 100%;
  border: none;
  border-radius: none;
  margin: 0.2rem 0;
  padding: 0.5rem;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  background: none;
  background-color: transparent;
  font-family: "Lato", sans-serif;
  color: black;
  display: block;
  width: 100%;
  height: 10rem;
  border: none;
  border-radius: none;
  margin: 0.2rem 0;
  padding: 0.5rem;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
