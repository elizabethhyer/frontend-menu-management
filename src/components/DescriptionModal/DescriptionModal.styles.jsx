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
  justify: center;
  align: center;
  font-size: 1.2rem;
  font-family: "Lato", sans-serif;
  outline: none;
  border-radius: 5px;

  @media screen and (max-width: 800px) {
    height: 100%;
    width: 100%;
  }
`;

export const DescriptionModalClose = styled(CloseIcon)`
  position: absolute;
  right: 0px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const DescriptionModalText = styled.div`
  padding: 1.5rem;
  margin-top: 2px;
`;
