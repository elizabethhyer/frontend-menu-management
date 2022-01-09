import * as styles from "./MenuItem.styles";
import { useState } from "react";
import DescriptionModal from "../DescriptionModal/DescriptionModal";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";

const MenuItem = ({ item, onDelete }) => {
  const [showDescModal, setShowDescModal] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const { title, imageUrl, description, price } = item;

  const toggleDescModal = () => {
    setShowDescModal(!showDescModal);
  };

  const toggleConfirmationDialog = () => {
    setShowConfirmationDialog(!showConfirmationDialog);
  };

  return (
    <styles.MenuItemsContainer>
      <styles.TrashCan onClick={toggleConfirmationDialog} />
      <styles.BackgroundImage
        className="image"
        imageUrl={imageUrl}
        onClick={toggleDescModal}
      />
      {showDescModal && (
        <DescriptionModal desc={description} title={item.title} />
      )}
      {showConfirmationDialog && (
        <ConfirmationDialog title={item.title} onDelete={onDelete} />
      )}
      <styles.MenuText>
        <div>{title}</div>
        <div>{parseFloat(price).toFixed(2)}</div>
      </styles.MenuText>
    </styles.MenuItemsContainer>
  );
};

export default MenuItem;
