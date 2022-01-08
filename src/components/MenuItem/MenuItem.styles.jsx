import styled from "styled-components";

export const MenuItemsContainer = styled.div`
width 20vw;
display: flex;
flex-direction: column;
height: 15rem;
align-items: center;
position: relative;
padding: 2rem;

@media screen and (max-width: 800px) {
 padding: .6rem;
 width 90vw;
}
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 3px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const MenuText = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
`;
