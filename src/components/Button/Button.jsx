import * as styles from "./Button.styles";

const Button = ({ text, onClick }) => {
  return (
    <styles.CustomButtonContainer onClick={onClick}>
      {text}
    </styles.CustomButtonContainer>
  );
};

export default Button;
