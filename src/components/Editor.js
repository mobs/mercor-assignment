import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css";
import { Box } from '@mui/material'
import Iconbar, { formats, modules} from './Iconbar';
import './custom.css'

// it is the text editor part and iconbar is attached at the top of it
// I have used ReactQuill for implementing the text editor

const Editor = () => {
    const [state, setState] = useState({value: null});

    const handleChange = value => {
        setState({value});
    }

    return (
        <div>
            <Iconbar />
            <Box sx={{
                paddingLeft: 40,
                margin: 3,
                backgroundColor:'whiteSmoke',
                height:500
            }}>
                <ReactQuill 
                    className='ql-container'
                    theme='snow'
                    value={state.value}
                    onChange={handleChange}
                    placeholder={"Write here..."}
                    modules={modules}
                    formats={formats}
                />
            </Box>
        </div>
    )
}

export default Editor