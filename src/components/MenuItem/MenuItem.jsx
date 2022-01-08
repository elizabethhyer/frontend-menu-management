import * as styles from "./MenuItem.styles";
import { useState } from "react";
import DescriptionModal from "../DescriptionModal/DescriptionModal";

const MenuItem = ({ item }) => {
  const [showDescModal, setShowDescModal] = useState(false);

  return (
    <styles.MenuItemsContainer>
      <styles.BackgroundImage
        className="image"
        imageUrl={item.imageUrl}
        onClick={() => {
          setShowDescModal(!showDescModal);
        }}
      />
      {showDescModal && <DescriptionModal desc={item.description} />}
      <styles.MenuText>
        <div>{item.title}</div>
        <div>{item.price}</div>
      </styles.MenuText>
    </styles.MenuItemsContainer>
  );
};

export default MenuItem;
