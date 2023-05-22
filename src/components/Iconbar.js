import React from 'react'
import { IconButton, Toolbar, Divider } from '@mui/material';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import ImagesearchRollerOutlinedIcon from '@mui/icons-material/ImagesearchRollerOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import FormatLineSpacingOutlinedIcon from '@mui/icons-material/FormatLineSpacingOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import FormatIndentDecreaseOutlinedIcon from '@mui/icons-material/FormatIndentDecreaseOutlined';
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined';
import { Quill } from 'react-quill';
import './custom.css'


// changing the inbuilt icons of quill
var icons = Quill.import('ui/icons');
icons['bold'] = <FormatBoldIcon />;
icons['italic'] = <FormatItalicIcon />
icons['underline'] = <FormatUnderlinedIcon />
icons['link'] = <InsertLinkOutlinedIcon />
icons['image'] = <InsertPhotoOutlinedIcon />
icons['video'] = <VideoCallOutlinedIcon />
icons['comment'] = <AddCommentOutlinedIcon />
icons['list'] = <FormatListBulletedOutlinedIcon />
icons['indent'] = <FormatIndentIncreaseOutlinedIcon />

// for undo recent changes
function undoChange() {
    this.quill.history.undo();
}

// for re doing the undo changes
function redoChange() {
    this.quill.history.redo();
}

// adding sizes and registering it with quill
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size,true);


// adding fonts and registring it with quill
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "caveta",
  "serif",
  "monospace"
];
Quill.register(Font, true);

// modules object for setting up QUill Editor
export const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        undo: undoChange,
        redo: redoChange
      }
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true
    }
};

// Formats objects for setting up the Quill editor
export const formats = [
    'font','size',
    'bold','italic','underline','strike',
    'color','background',
    'script',
    'header','blockquote','code-block',
    'indent','list',
    'direction','align',
    'link','image','video','formula','zoomin'
];

// iconbar for all the icons for formatting of text
const Iconbar = () => {

  return (
    <>
      <Toolbar id="toolbar" 
        sx={{
          marginLeft:'2rem',
          marginTop:'0.8rem',
          height:'10px',
          width:'95%',
          borderRadius:'2rem',
          backgroundColor:'#edf2fa',
        }}
      > 
        <IconButton className='ql-undo'> <UndoOutlinedIcon fontSize='small' /> </IconButton>
        <IconButton className='ql-redo'> <RedoOutlinedIcon fontSize='small' /> </IconButton>
        <IconButton> <LocalPrintshopOutlinedIcon fontSize='small' /> </IconButton>
        <IconButton className='ql-spell'> <SpellcheckOutlinedIcon fontSize='small' /> </IconButton>
        <IconButton> <ImagesearchRollerOutlinedIcon fontSize='small' /> </IconButton>

        <IconButton > <ZoomInOutlinedIcon fontSize='small' /> </IconButton>
        <IconButton> <ZoomOutOutlinedIcon fontSize='small' /> </IconButton>
    
        <Divider orientation='vertical' sx={{margin:'1rem'}}/>
        
        <select className="ql-header ql-size" defaultValue="3">
            <option value="huge"> Title </option>
            <option value='large'> Sub Title</option>
            <option value="1">Heading 1</option>
            <option value="2"> Heading 2</option>
            <option value="3">Subheading</option>
            <option value="small"> Small Text </option>
        </select>

        <Divider orientation='vertical' sx={{margin:'1rem'}}/>
        
        <span className='ql-formats' >
        <select className="ql-font" defaultValue="arial">
            <option value="arial"> Arial </option>
            <option value="serif">Serif</option>
            <option  selected="monospace" value="monospace">Monospace</option>
        </select>
        </span>
        
        <Divider orientation='vertical'sx={{margin:'1rem'}}/>
        
        <select className="ql-size" defaultValue="medium">
            <option value="small"> 10 </option>
            <option value="medium">14</option>
            <option value="large">16</option>
        </select>
        
        
        <Divider orientation='vertical'sx={{margin:'1rem'}}/>

        <IconButton className='ql-bold'> <FormatBoldIcon className='ql-bold' fontSize='small' /> </IconButton>
        <IconButton className='ql-italic'> <FormatItalicIcon fontSize='small' /> </IconButton>
        <IconButton className='ql-underline'> <FormatUnderlinedIcon fontSize='small' /> </IconButton>
        <IconButton className='ql-strike'> <FormatColorTextOutlinedIcon fontSize='small' /> </IconButton>
        <IconButton> <select className='ql-color'> </select></IconButton>
        <IconButton> <select className='ql-background'> </select></IconButton>
        <Divider orientation='vertical'sx={{margin:'1rem'}}/>
        <IconButton className='ql-link'> <InsertLinkOutlinedIcon fontSize='small'   /> </IconButton>
        <IconButton className='ql-image'> <InsertPhotoOutlinedIcon fontSize='small'  /> </IconButton>
        <IconButton className='ql-video'> <VideoCallOutlinedIcon  /> </IconButton>
        <Divider orientation='vertical'sx={{margin:'1rem'}}/>

        <IconButton > <FormatLineSpacingOutlinedIcon fontSize='small' /> </IconButton>
        <IconButton > <ChecklistOutlinedIcon fontSize='small'  /> </IconButton>
        <IconButton className='ql-list' value='bullet'> <FormatListBulletedOutlinedIcon fontSize='small'  /> </IconButton>
        <IconButton className='ql-list' value='ordered'> <FormatListNumberedOutlinedIcon fontSize='small'  /> </IconButton>
        <IconButton className='ql-indent' value='-1'> <FormatIndentDecreaseOutlinedIcon fontSize='small' /> </IconButton>
        <IconButton className='ql-indent' value='+1'> <FormatIndentIncreaseOutlinedIcon fontSize='small' /> </IconButton>
      </Toolbar>
    </>
  )
}

export default Iconbar