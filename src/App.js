import React from 'react';
import Navbar  from './components/Navbar'
import Editor from './components/Editor'
import { Box } from '@mui/material'

function App() {
  return (
    <Box width='100%'>
      <Navbar />
      <br/>
      <Editor />
    </Box>
  );
}

export default App;
