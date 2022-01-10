import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const DescriptionModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify: center;
  align: center;
  font-size: 1.2rem;
  font-family: "Lato", sans-serif;
  outline: none;
  border-radius: 5px;
  background: #fff;
  overflow-x: scroll;

  @media screen and (max-width: 1100px) {
    height: 50%;
    width: 70%;
  }

  @media screen and (max-width: 400px) {
    height: 90%;
    width: 90%;
  }

  @media screen and (max-width: 300px) {
    height: 100%;
    width: 100%;
  }
`;

export const DescriptionModalClose = styled(CloseIcon)`
  position: absolute;
  right: 0px;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;

  @media screen and (max-width: 300px) {
    left: 0px;
    margin-left: 10px;
  }
`;

export const TitleText = styled.div`
  font-family: "Francois One", sans-serif;
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 1.5rem;
  color: #f96167;
  text-align: center;
`;

export const DescriptionModalText = styled.div`
  padding: 1.5rem;
`;
