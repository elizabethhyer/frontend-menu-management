import * as styles from "./Button.styles";

const Button = ({ text, action }) => {
  // console.log(itemProps);

  // const [imageUrl, setImageUrl] = useState(itemProps.imageUrl);
  // const [title, setTitle] = useState(itemProps.title);
  // const [price, setPrice] = useState(itemProps.price);
  // const [description, setDescription] = useState(itemProps.desc);

  // const deleteItem = () => {
  //   console.log(imageUrl, price, title, description);
  //   setImageUrl("");
  //   setTitle("");
  //   setPrice("");
  //   setDescription("");
  // };

  const handlection = () => {
    if (action === "delete") {
      // deleteItem();
    }
  };

  return (
    <styles.CustomButtonContainer onClick={handlection}>
      {text}
    </styles.CustomButtonContainer>
  );
};

export default Button;
