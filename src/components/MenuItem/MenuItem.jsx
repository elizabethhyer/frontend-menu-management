import * as styles from "./MenuItem.styles";
import { useState } from "react";
import DescriptionModal from "../DescriptionModal/DescriptionModal";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";

const MenuItem = ({ item }) => {
  const [showDescModal, setShowDescModal] = useState(false);

  const [imageUrl, setImageUrl] = useState(item.imageUrl);
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  const [showTrashCan, setShowTrashCan] = useState(true);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  // const deleteItem = () => {
  //   setShowConfirmationDialog(true);
  //   setImageUrl("");
  //   setTitle("");
  //   setPrice("");
  //   setDescription("");
  //   setShowTrashCan(false);
  // };

  const toggleModal = () => {
    setShowDescModal(!showDescModal);
  };

  console.log(showConfirmationDialog);

  return (
    <styles.MenuItemsContainer>
      {showTrashCan && (
        <styles.TrashCan onClick={() => setShowConfirmationDialog(true)} />
      )}
      <styles.BackgroundImage
        className="image"
        imageUrl={imageUrl}
        onClick={toggleModal}
      />
      {showDescModal && (
        <DescriptionModal desc={description} title={item.title} />
      )}
      {showConfirmationDialog && (
        <ConfirmationDialog
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          desc={item.description}
        />
      )}
      <styles.MenuText>
        <div>{title}</div>
        <div>{price}</div>
      </styles.MenuText>
    </styles.MenuItemsContainer>
  );
};

export default MenuItem;
