import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import './style.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: '#4CAF50',
      position: 'fixed',
      bottom: theme.spacing(5),
      right: theme.spacing(5),
    },
  }),
);

const Upload = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    console.log(files);
  };


  const handleSave = (items: File[]) => {
    setFiles(items);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={handleOpen}
      >
        Upload
      </Button>
      <DropzoneDialog
        fullWidth={true}
        filesLimit={10}
        open={open}
        onSave={handleSave}
        acceptedFiles={['image/*']}
        showPreviews={true}
        maxWidth={'xl'}
        dialogTitle={'Загрузка файлов'}
        dropzoneText={'Кликните или перетащите сюда нужный файл'}
        cancelButtonText={'Отменить'}
        submitButtonText={'Загрузить'}
        maxFileSize={5000000}
        onClose={handleClose}
      />
    </div>
  );
};

export default Upload;
