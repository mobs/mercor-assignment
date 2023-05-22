import React, { useState } from 'react'
import { Button, Stack, IconButton, Modal, Grid, Typography} from '@mui/material'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import './custom.css'

import { GoogleApps } from '../assets';


const RightSide = () => {

  // handling modal open and close using state
  const [open, setOpen] = useState(false);

  function handleDropDown() {
    setOpen((prevState) => !prevState);
  }

  // it is for the right part of the navbar which has history, comment, login, share etc. buttons
  return (
    <>
        <Stack
          direction='row'
          alignItems='center'
          sx={{ background:'white' , justifyContent:'space-evenly'}}
        >
          <HistoryOutlinedIcon style={{ cursor:'pointer'}}/>
          <CommentOutlinedIcon style={{ cursor:'pointer'}}/>
          <a href='https://meet.google.com'> <VideocamOutlinedIcon style={{ cursor:'pointer'}}/> </a>
          <Button variant='contained' sx={{ backgroundColor:'#4285f4',borderRadius:'2rem'}}> 
            <LockOutlinedIcon />
            Share 
          </Button>
          <IconButton onClick={handleDropDown}> <AppsOutlinedIcon /> </IconButton>
          <Modal
            open={open}
            onClose={handleDropDown}
          >
            <Grid container xs={3}
            sx={{
              position: 'absolute',
              top: '9%',
              left: '72%',
              width: 450,
              bgcolor: 'background.paper',
              borderRadius: '1rem',
              padding:'30px',
              boxShadow: 24,
              p: 4,
            }}>
              {GoogleApps.map((app,idx) => (
                <Grid item xs={4} key={idx}>
                  <a href={app.link}> {app.icon} </a>
                  <Typography> {app.name} </Typography>
                </Grid>
              ))}
            </Grid>
          </Modal>
          <Button variant='contained' sx={{ backgroundColor:'#4285f4', borderRadius: '2rem'}}> LogIN </Button>
        </Stack>
    </>                  
  )
}

export default RightSide