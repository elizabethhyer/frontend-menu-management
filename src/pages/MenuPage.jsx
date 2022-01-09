import * as styles from "./MenuPage.styles";
import MenuOverview from "../components/MenuOverview/MenuOverview";
import AddItemModal from "../components/AddItemModal/AddItemModal";

const MenuPage = () => {
  return (
    <styles.MenuPageContainer>
      <MenuOverview />
      <AddItemModal />
    </styles.MenuPageContainer>
  );
};

export default MenuPage;
