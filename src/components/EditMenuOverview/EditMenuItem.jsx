import * as styles from "./EditMenuItem.styles";
import { useState } from "react";
import Button from "../Button/Button";

const EditMenuItem = ({ item, onEdit }) => {
  const [imageUrl, setImageUrl] = useState(item.imageUrl);
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);

  const { id } = item;

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

    onEdit({ id, imageUrl, title, price, description });
  };

  return (
    <>
      <styles.EditMenuItemsContainer>
        <styles.BackgroundImage className="image" imageUrl={imageUrl} />
        <styles.EditMenuText>Image:</styles.EditMenuText>
        <styles.TextInput
          type="text"
          value={imageUrl}
          placeholder={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <styles.EditMenuText>Title:</styles.EditMenuText>

        <styles.TextInput
          type="text"
          value={title}
          placeholder={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <styles.EditMenuText>Price:</styles.EditMenuText>

        <styles.TextInput
          type="text"
          value={price}
          placeholder={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <styles.EditMenuText>Description:</styles.EditMenuText>

        <styles.TextArea
          type="text"
          value={description}
          placeholder={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </styles.EditMenuItemsContainer>

      <Button text="submit" onClick={onSubmit} />
    </>
  );
};

export default EditMenuItem;
