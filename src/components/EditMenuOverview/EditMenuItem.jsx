import { useState } from "react";

import * as styles from "./EditMenuItem.styles";

const EditMenuItem = ({ item, onEdit }) => {
  const [imageUrl, setImageUrl] = useState(item.imageUrl);
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);

  const { id } = item;

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

    onEdit({ id, imageUrl, title, price, description });
  };

  return (
    <styles.MenuItemsContainer>
      <styles.BackgroundImage className="image" imageUrl={imageUrl} />
      <styles.MenuText>
        <styles.MenuTextInput
          type="text"
          value={title}
          placeholder={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={onSubmit}
          title={`${title}TitleInput`}
        />
        <styles.MenuTextInput
          type="text"
          value={price}
          placeholder={price}
          onChange={(e) => setPrice(e.target.value)}
          onBlur={onSubmit}
          isNum={true}
          title={`${title}PriceInput`}
        />
      </styles.MenuText>
      <styles.DescriptionTextarea
        type="text"
        value={description}
        placeholder={description}
        onChange={(e) => setDescription(e.target.value)}
        onBlur={onSubmit}
      />
      <styles.MenuImageTextInput
        type="text"
        value={imageUrl}
        placeholder={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        onBlur={onSubmit}
      />
    </styles.MenuItemsContainer>
  );
};

export default EditMenuItem;
