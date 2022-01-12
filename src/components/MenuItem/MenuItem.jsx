import { useState } from "react";

import * as styles from "./MenuItem.styles";
import DescriptionModal from "../DescriptionModal/DescriptionModal";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";

const MenuItem = ({ item, onDelete }) => {
  const [showDescModal, setShowDescModal] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const { imageUrl, title, price, description, id } = item;

  const toggleDescModal = () => {
    setShowDescModal(!showDescModal);
  };

  const toggleConfirmationDialog = () => {
    setShowConfirmationDialog(!showConfirmationDialog);
  };

  return (
    <styles.MenuItemsContainer>
      <styles.BackgroundImage
        className="image"
        imageUrl={imageUrl}
        onClick={toggleDescModal}
        data-testid={`${title}Image`}
      >
        <styles.TrashCan onClick={toggleConfirmationDialog} />
      </styles.BackgroundImage>
      {showDescModal && <DescriptionModal desc={description} title={title} />}
      {showConfirmationDialog && (
        <ConfirmationDialog id={id} onDelete={onDelete} />
      )}

      <styles.MenuText>
        <div>{title}</div>
        <div>{parseFloat(price).toFixed(2)}</div>
      </styles.MenuText>
    </styles.MenuItemsContainer>
  );
};

export default MenuItem;
