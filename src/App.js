import { Box } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import SampleForm from './components/SampleForm';

function App() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          flexGrow: 1,
          alignItems: 'center',
          flexDirection: 'column',
          padding: 4,
        }}
      >
        <SampleForm />
      </Box>
    </Container>
  );
}

export default App;
