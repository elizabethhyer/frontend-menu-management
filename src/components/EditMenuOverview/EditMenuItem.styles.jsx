import styled from "styled-components";

export const EditMenuItemsContainer = styled.div`
width 40vw;
display: flex;
flex-direction: column;
height: 40rem;
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
  height: 40%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 3px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  filter: drop-shadow(0 3px 0.4rem black);
  margin-bottom: 1rem;
`;

export const EditMenuText = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
`;

export const TextInput = styled.input`
  background: none;
  background-color: #fff;
  color: black;
  display: block;
  width: 100%;
  border: none;
  border-radius: none;
  margin: 0.2rem 0;

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  background: none;
  background-color: #fff;
  color: black;
  display: block;
  width: 100%;
  height: 10rem;
  border: none;
  border-radius: none;
  margin: 0.2rem 0;
  font-family: "Lato", sans-serif;

  &:focus {
    outline: none;
  }
`;
