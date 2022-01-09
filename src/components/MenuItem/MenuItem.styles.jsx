import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

export const MenuItemsContainer = styled.div`
width 20vw;
display: flex;
flex-direction: column;
height: 15rem;
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
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 3px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  filter: drop-shadow(0 3px 0.4rem black);
  margin-bottom: 1rem;
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

export const TrashCan = styled(DeleteIcon)`
  position: absolute;
  margin-left: 15rem;
  margin-top: 1rem;
  z-index: 1000;
  filter: drop-shadow(0 0 0.3rem #fff);
`;
