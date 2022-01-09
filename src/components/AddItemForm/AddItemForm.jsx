import * as styles from "./AddItemForm.styles";
import { useState } from "react";
import Button from "../Button/Button";

const AddItemForm = ({ onAdd }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // My thought process here is that the prices should probably be numerical, instead of word pricing
    if (isNaN(price) || typeof price !== "number") {
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
    <styles.AddItemFormContainer>
      <styles.TitleText>Add a new item</styles.TitleText>
      <form onSubmit={onSubmit}>
        <styles.Text>Image:</styles.Text>
        <styles.TextInput
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <styles.Text>* Title:</styles.Text>

        <styles.TextInput
          type="text"
          placeholder="Item name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <styles.Text>* Price:</styles.Text>

        <styles.TextInput
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <styles.Text>Description:</styles.Text>

        <styles.TextArea
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button text="Add item" type="submit" />
        <styles.Text>* are required fields</styles.Text>
      </form>
    </styles.AddItemFormContainer>
  );
};

export default AddItemForm;
