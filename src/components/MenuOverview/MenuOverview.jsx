import MenuItem from "../MenuItem/MenuItem";
import * as styles from "./MenuOverview.styles";
import { restuarantData } from "../../data/menu.data";
import { Grid } from "@mui/material";
import EditMenuItem from "../EditMenuOverview/EditMenuItem";
import { useState } from "react";
import Button from "../Button/Button";

const MenuOverview = ({ items, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div>
      <Button
        text={!editing ? "edit items" : "done editing"}
        onClick={() => setEditing(!editing)}
      />
      {restuarantData.map((restaurant) => (
        <styles.MenuTitle key={restaurant.name}>
          {restaurant.name}
        </styles.MenuTitle>
      ))}
      <Grid
        container
        justifyContent={!editing ? "space-around" : "center"}
        alignItems="center"
      >
        {items.map((item, index) =>
          !editing ? (
            <MenuItem key={index} item={item} onDelete={onDelete} />
          ) : (
            <EditMenuItem key={index} item={item} onEdit={onEdit} />
          )
        )}
      </Grid>
    </div>
  );
};

export default MenuOverview;
