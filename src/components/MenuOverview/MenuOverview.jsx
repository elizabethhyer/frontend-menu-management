import MenuItem from "../MenuItem/MenuItem";
import * as styles from "./MenuOverview.styles";
import { restuarantData } from "../../data/menu.data";
import { Grid } from "@mui/material";

const MenuOverview = ({ isEditing }) => {
  console.log(isEditing);
  return (
    <div>
      {restuarantData.map((restaurant) => (
        <styles.MenuTitle>{restaurant.name}</styles.MenuTitle>
      ))}
      <Grid container justifyContent="space-around" alignItems="center">
        {restuarantData.map((restaurant) =>
          restaurant.menuItems.map((item) => (
            <MenuItem key={item.title} item={item} />
          ))
        )}
      </Grid>
    </div>
  );
};

export default MenuOverview;
