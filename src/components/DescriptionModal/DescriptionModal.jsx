import { useState } from "react";
import { Modal } from "@mui/material";

import * as styles from "./DescriptionModal.styles";

const DescriptionModal = ({ desc, title }) => {
  const [showDescModal, setShowDescModal] = useState(true);

  const toggleModal = () => {
    setShowDescModal(!showDescModal);
  };

  return (
    <Modal open={showDescModal} onBlur={toggleModal}>
      <styles.DescriptionModalContainer>
        <styles.TitleText>The {title}</styles.TitleText>
        <styles.DescriptionModalText>{desc}</styles.DescriptionModalText>
        <styles.DescriptionModalClose onClick={toggleModal} />
      </styles.DescriptionModalContainer>
    </Modal>
  );
};

export default DescriptionModal;
