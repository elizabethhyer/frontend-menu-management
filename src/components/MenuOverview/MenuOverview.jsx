import MenuItem from "../MenuItem/MenuItem";
import * as styles from "./MenuOverview.styles";
import { restuarantData } from "../../data/menu.data";
import { Grid } from "@mui/material";
import EditMenuItem from "../EditMenuOverview/EditMenuItem";
import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const MenuOverview = ({ items, onDelete, onEdit, isEditing }) => {
  const [editing, setEditing] = useState(isEditing);

  return (
    <div>
      <Link to={!editing ? "/edit" : "/"} style={{ textDecoration: "none" }}>
        <Button
          text={!editing ? "edit items" : "done editing"}
          onClick={() => setEditing(!editing)}
        />
      </Link>
      <Link to="/add" style={{ textDecoration: "none" }}>
        <Button text="add item" />
      </Link>
      {restuarantData.map((restaurant) => (
        <styles.MenuTitle key={restaurant.name}>
          {restaurant.name}
        </styles.MenuTitle>
      ))}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
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
