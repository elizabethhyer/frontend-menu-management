import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

export const MenuItemsContainer = styled.div`
width 20vw;
display: flex;
flex-direction: column;
height:  15rem;
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
  font-size: 0.9rem;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;

  @media screen and (max-width: 700px) {
    padding-bottom: 1rem;
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
  filter: drop-shadow(0 3px 0.4rem black);
  margin-bottom: 1rem;
`;

export const TrashCan = styled(DeleteIcon)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.5rem;
  color: #f96167;
  z-index: 1000;
  filter: drop-shadow(0 0 5px white);
`;
