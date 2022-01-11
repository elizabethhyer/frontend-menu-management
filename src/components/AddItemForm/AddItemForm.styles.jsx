import styled from "styled-components";

export const AddItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  width: auto;
`;

export const TitleText = styled.div`
  font-family: "Francois One", sans-serif;
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 1.5rem;
  color: #f96167;
  text-align: center;
`;

export const TextInput = styled.input`
  background: none;
  background-color: #fff;
  color: black;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 90vw;
  border: 1px solid grey;
  border-radius: none;
  font-family: "Lato", sans-serif;

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  background: none;
  background-color: #fff;
  color: black;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 90vw;
  height: 10rem;
  border: 1px solid grey;
  border-radius: none;
  font-family: "Lato", sans-serif;

  &:focus {
    outline: none;
  }
`;

export const Text = styled.label`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  padding: 0.3rem;
`;
