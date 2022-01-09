import styled from "styled-components";
import Dialog from "@mui/material/Dialog";

export const ConfirmationModalContainer = styled(Dialog)`
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
  background: #fce77d;

  @media screen and (max-width: 800px) {
    height: 100%;
    width: 100%;
  }
`;

export const ConfirmationModalText = styled.div`
  padding: 1.5rem;
  margin-top: 2px;
  font-size: 0.9rem;
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
`;
