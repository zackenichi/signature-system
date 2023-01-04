import { Grid, Snackbar } from '@mui/material';
import React, { useRef, useState } from 'react';
import About from './About';
import AppTitle from './AppTitle';
import DateSigned from './DateSigned';
import EntryModal from './EntryModal';
import FormControls from './FormControls';
import SignatureInput from './SignatureInput';
import TextInputComponent from './TextInputComponent';

const SampleForm = () => {
  // used ref instead of useState
  // to prevent unnecessary rendering
  const nameRef = useRef();
  const emailRef = useRef();
  const sigRef = useRef();
  const today = new Date();

  const [formData, setFormData] = useState({});

  //   modal states
  const [displayEntry, setDisplayEntry] = useState(false);
  const [displayAbout, setDisplayAbout] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const clearSignature = () => {
    sigRef.current.clear();
  };

  const handleSave = () => {
    if (nameRef.current.value !== '' && emailRef.current.value !== '') {
      // next part should be storing file in storage

      // for demo purposes - we will display everything on a modal

      //   turn date into string - for demo only
      const dateSigned = today.toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const formEntry = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        dateSigned: dateSigned,
        signatureUrl: sigRef.current.getTrimmedCanvas().toDataURL('image/png'),
      };

      setFormData(formEntry);
      setDisplayEntry(true);
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleClear = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    sigRef.current.clear();
  };

  const handleCloseEntryModal = () => {
    setDisplayEntry(false);
  };

  return (
    <Grid container spacing={2}>
      <AppTitle handleOpen={() => setDisplayAbout(true)} />
      <TextInputComponent Label="Name" textRef={nameRef} />
      <TextInputComponent Label="Email" textRef={emailRef} />
      <DateSigned signedDate={today} />
      <SignatureInput sigRef={sigRef} clearSignature={clearSignature} />
      <FormControls handleSave={handleSave} handleClear={handleClear} />
      <EntryModal
        displayEntry={displayEntry}
        closeEntryModal={handleCloseEntryModal}
        formData={formData}
      />
      <Snackbar
        open={openSnackbar}
        message="Incomplete form"
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      />
      <About
        displayAbout={displayAbout}
        closeAbout={() => setDisplayAbout(false)}
      />
    </Grid>
  );
};

export default SampleForm;
