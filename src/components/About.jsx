import {
  Box,
  Grid,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const About = ({ displayAbout, closeAbout }) => {
  return (
    <Modal open={displayAbout} onClose={closeAbout}>
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
              About project
            </Typography>
          </Grid>
          <Grid item md={6} xs={4} textAlign="right">
            <Tooltip title="Close">
              <IconButton onClick={closeAbout}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              This is a sample project that showcases how to add a signature
              capture system in React.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              This project uses Material UI and React-Signature-Canvas
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              Made by
              <a
                href="https://github.com/zackenichi"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                ZacKenichi
              </a>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <a
                href="https://www.npmjs.com/package/react-signature-canvas"
                target="_blank"
                rel="noreferrer"
              >
                Signature canvas
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <a
                href="https://www.npmjs.com/package/@types/react-signature-canvass"
                target="_blank"
                rel="noreferrer"
              >
                Types
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default About;
