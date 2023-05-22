import React from 'react'
import { Stack, Button, Grid, TextField } from '@mui/material'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import ArticleIcon from '@mui/icons-material/Article';

import RightSide from './RightSide';

// navbar component
const Navbar = () => {
  return (
    <>
    <Grid container spacing={2} sx={{ marginLeft:'1rem', position:'sticky', top:0, width:'98.5%' }}>
        <Grid item xs={8} >
            <Stack direction='row' alignItems='center' spacing={2} >
              <ArticleIcon fontSize='large' style={{color:'#4285f4'}}/>
              <TextField label="Document Name" variant='standard'> </TextField>
              <StarOutlineIcon style={{ cursor:'pointer'}} />
              <DriveFileMoveOutlinedIcon style={{ cursor:'pointer'}}/>
              <CloudDoneOutlinedIcon style={{ cursor:'pointer'}}/>
            </Stack>
            <Stack direction='row'>
                <Button sx={{color:'black'}}> File </Button>
                <Button sx={{color:'black'}}> Edit </Button>
                <Button sx={{color:'black'}}> View </Button>
                <Button sx={{color:'black'}}> Insert </Button>
                <Button sx={{color:'black'}}> Format </Button>
                <Button sx={{color:'black'}}> Tools </Button>
                <Button sx={{color:'black'}}> Extensions </Button>
                <Button sx={{color:'black'}}> Help </Button>

            </Stack>
        </Grid>
        <Grid item xs={4}>
          <RightSide />           
        </Grid>
    </Grid>
    </>
  )
}

export default Navbar