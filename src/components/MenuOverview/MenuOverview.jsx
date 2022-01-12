import { useState } from "react";
import { Grid } from "@mui/material";

import * as styles from "./MenuOverview.styles";
import Button from "../Button/Button";
import MenuItem from "../MenuItem/MenuItem";
import EditMenuItem from "../EditMenuOverview/EditMenuItem";

const MenuOverview = ({ items, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <Button
        text={!isEditing ? "edit items" : "done editing"}
        onClick={() => setIsEditing(!isEditing)}
      />

      <styles.MenuTitle>Sandwich King</styles.MenuTitle>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        {items.map((item, index) =>
          !isEditing ? (
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
