import { useState } from "react";
import Button from "../Button/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import * as styles from "./ConfirmationDialog.styles";

const ConfirmationDialog = (props) => {
  const [open, setOpen] = useState(true);

  // const [imageUrl, setImageUrl] = useState(props.imageUrl);
  // const [title, setTitle] = useState(props.title);
  // const [price, setPrice] = useState(props.price);
  // const [description, setDescription] = useState(props.desc);
  // const [showTrashCan, setShowTrashCan] = useState(true);

  const toggleDialog = () => {
    setOpen(!open);
  };

  // console.log(imageUrl, price, title, description);

  const deleteItem = () => {
    // console.log(imageUrl, price, title, description);
    // setImageUrl("");
    // setTitle("");
    // setPrice("");
    // setDescription("");
    // setShowTrashCan(false);
    toggleDialog();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={toggleDialog}
        onBlur={toggleDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <styles.ConfirmationModalText id="alert-dialog-title">
          {"Are you sure you would like to delete this item?"}
        </styles.ConfirmationModalText>
        <DialogActions>
          <Button text="cancel" onClick={toggleDialog}>
            Cancel
          </Button>
          <Button text="delete" onClick={deleteItem}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationDialog;
