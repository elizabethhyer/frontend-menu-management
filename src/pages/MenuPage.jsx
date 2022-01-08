import MenuItem from "../components/MenuItem/MenuItem";
import { menuData } from "../data/menu.data";
import * as styles from "./MenuPage.styles";
import { Grid } from "@mui/material";

const MenuPage = () => {
  return (
    <Grid container justifyContent="left" alignItems="center">
      {menuData.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </Grid>
  );
};

export default MenuPage;
