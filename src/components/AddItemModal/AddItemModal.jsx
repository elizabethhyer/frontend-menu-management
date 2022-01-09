import * as styles from "./AddItemModal.styles";
import { useState } from "react";

const AddItemModal = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <styles.AddItemFormContainer>
      <styles.TitleText>Add a new item</styles.TitleText>
      <form onSubmit={(e) => e.preventDefault()}>
        <styles.Text>Image:</styles.Text>
        <styles.TextInput
          type="text"
          placeholder="Image URL"
          onBlur={(e) => setImageUrl(e.target.value)}
        />
        <styles.Text>Title:</styles.Text>

        <styles.TextInput
          type="text"
          placeholder="Item name"
          onBlur={(e) => setTitle(e.target.value)}
        />
        <styles.Text>Price:</styles.Text>

        <styles.TextInput
          type="text"
          placeholder="Price"
          onBlur={(e) => setPrice(e.target.value)}
        />
        <styles.Text>Description:</styles.Text>

        <styles.TextArea
          type="text"
          placeholder="Description"
          onBlur={(e) => setDescription(e.target.value)}
        />
      </form>
    </styles.AddItemFormContainer>
  );
};

export default AddItemModal;
