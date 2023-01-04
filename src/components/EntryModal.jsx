import {
  Grid,
  Modal,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const EntryModal = ({ displayEntry, closeEntryModal, formData }) => {
  return (
    <Modal open={displayEntry} onClose={closeEntryModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: { md: 500, xs: '80%' },
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: '24',
          p: 4,
        }}
      >
        <Grid container spacing={1}>
          <Grid item md={6} xs={8}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>
              Form entry
            </Typography>
          </Grid>
          <Grid item md={6} xs={4} textAlign="right">
            <Tooltip title="Close">
              <IconButton onClick={closeEntryModal}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight="bold">Name</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{formData.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight="bold">Email</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{formData.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight="bold">Date signed</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{formData.dateSigned}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight="bold">Signature</Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={formData.signatureUrl} alt="signature" />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default EntryModal;
