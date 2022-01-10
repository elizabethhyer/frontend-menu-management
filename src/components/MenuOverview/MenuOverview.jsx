import MenuItem from "../MenuItem/MenuItem";
import * as styles from "./MenuOverview.styles";
import { restuarantData } from "../../data/menu.data";
import { Grid } from "@mui/material";

const MenuOverview = ({ items, onDelete }) => {
  return (
    <div>
      {restuarantData.map((restaurant) => (
        <styles.MenuTitle key={restaurant.name}>
          {restaurant.name}
        </styles.MenuTitle>
      ))}
      <Grid container justifyContent="space-around" alignItems="center">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} onDelete={onDelete} />
        ))}
      </Grid>
    </div>
  );
};

export default MenuOverview;
