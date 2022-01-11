import * as styles from "./AddItemForm.styles";
import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const AddItemForm = ({ onAdd }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setPrice(Number(price));

    // My thought process here is that the prices should probably be numerical, instead of word pricing
    if (isNaN(price)) {
      alert("Price must be entered as a numerical value");
      setPrice(0);
      return;
    }

    // And my thought process here is that a user should be able to get away with not submitting a photo or description
    if (!title || !price) {
      alert("Your item is missing a required field");
      return;
    }

    onAdd({ imageUrl, title, price, description });

    setImageUrl("Image URL");
    setTitle("Item name");
    setPrice(0);
    setDescription("Description");
  };

  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button text={"home"} />
      </Link>
      <styles.AddItemFormContainer>
        <styles.TitleText>Add a new item</styles.TitleText>
        <form onSubmit={onSubmit}>
          <styles.Text htmlFor="imageInput">Image:</styles.Text>
          <styles.TextInput
            id="imageInput"
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <styles.Text htmlFor="titleInput">* Title:</styles.Text>

          <styles.TextInput
            id="titleInput"
            type="text"
            placeholder="Item name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <styles.Text htmlFor="priceInput">* Price:</styles.Text>

          <styles.TextInput
            id="priceInput"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <styles.Text htmlFor="descInput">Description:</styles.Text>

          <styles.TextArea
            id="descInput"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button text="Add item" type="submit" />
          <styles.Text>* are required fields</styles.Text>
        </form>
      </styles.AddItemFormContainer>
    </div>
  );
};

export default AddItemForm;
