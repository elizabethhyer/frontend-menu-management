import styled from "styled-components";

export const MenuItemsContainer = styled.div`
width 20vw;
display: flex;
flex-direction: column;
height:  20rem;
align-items: center;
position: relative;
padding: 2rem;
cursor: pointer;

@media screen and (max-width: 1100px) {
  padding: 1.5rem;
  width 40vw;
 }

 @media screen and (max-width: 800px) {
  padding: 1.5rem;
  width 45vw;
 }

 @media screen and (max-width: 600px) {
  padding: 1.5rem;
  width 70vw;
  height: 30rem;
 }

@media screen and (max-width: 450px) {
  padding: .1rem;
  width 90vw;
 }

 @media screen and (max-width: 300px) {
  padding: .1rem;
  width 85vw;
}
`;

export const MenuText = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    height: 10%;
  }
`;

export const MenuTextInput = styled.input`
  width: ${(prop) => (prop.isNum ? "10%" : "90%")};

  font-size: 0.9rem;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;

  display: block;
  border: none;
  border-radius: none;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 700px) {
    padding-bottom: 1rem;
  }
`;

export const MenuImageTextInput = styled.input`
  width: 100%;
  height: 3%;
  font-size: 0.8rem;
  font-family: "Lato", sans-serif;
  border: none;
  margin-top: 0.7rem;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const DescriptionTextarea = styled.textarea`
  height: 32%;
  width: 100%;
  margin-top: 1rem;
  overflow: scroll;
  background: none;
  background-color: transparent;
  font-family: "Lato", sans-serif;
  color: black;
  display: block;
  border: none;
  border-radius: none;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 600px) {
    height: 20%;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 60%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 3px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  filter: drop-shadow(0 3px 0.4rem black);
  margin-bottom: 1rem;

  @media screen and (max-width: 600px) {
    height: 55%;
  }
`;
