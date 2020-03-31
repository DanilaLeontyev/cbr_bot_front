import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DeleteIcon from '@material-ui/icons/Delete';
import tileData from './tileData';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { openDialog } from './../../store/imageDialog/actions';

const useStyles = makeStyles<Theme, 'dialogContent' | 'cardActions'>({
  dialogContent: {
    maxWidth: '100%',
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
});

const ImageDialog: React.FC = () => {
  const classes = useStyles();
  const isOpen = useSelector<RootState, RootState['imageDialog']['isOpen']>((store) => store.imageDialog.isOpen);
  const dispatch = useDispatch();

  const handleClose: DialogProps['onClose'] = () => {
    dispatch(openDialog(false));
  };

  return (
    <Dialog
      maxWidth={false}
      className={classes.dialogContent}
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogContent className={classes.dialogContent}>
        <img src={tileData[0].img} alt="somealt" />
      </DialogContent>
      <DialogActions className={classes.cardActions}>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageDialog;
