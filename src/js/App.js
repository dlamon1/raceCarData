import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

export default function App() {

  const [url, setUrl] = useState('')

  return (
    <Grid container style={{ backgroundColor: '#3B4040', marginTop: 15 }}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <TextField
        color='secondary'
        size='small'
        id="outlined-textarea"
        label="crono url"
        variant="outlined"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button
        onClick={() => e.server.setUrl(url)}
        fullWidth style={{ backgroundColor: '#000', marginTop: 15 }}>
        start
      </Button>
      <Box>
      </Box>
    </Grid >
  )
}