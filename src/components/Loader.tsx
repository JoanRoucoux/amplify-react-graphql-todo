import React from 'react';
import {
  Box,
  CircularProgress,
} from '@mui/material';

const Loader: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'inherit',
    }}
  >
    <CircularProgress />
  </Box>
);

export default Loader;
