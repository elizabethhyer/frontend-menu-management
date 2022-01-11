import { useState } from "react";
import Button from "../Button/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import * as styles from "./ConfirmationDialog.styles";

const ConfirmationDialog = ({ onDelete, id }) => {
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(true);

  const toggleDialog = () => {
    setShowConfirmationDialog(!showConfirmationDialog);
  };

  return (
    <div>
      <Dialog
        open={showConfirmationDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <styles.ConfirmationModalText id="alert-dialog-title">
          {"Are you sure you would like to delete this item?"}
        </styles.ConfirmationModalText>
        <DialogActions>
          <Button text="cancel" onClick={toggleDialog} />
          <Button
            text="delete"
            onClick={() => {
              toggleDialog();
              onDelete(id);
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationDialog;
