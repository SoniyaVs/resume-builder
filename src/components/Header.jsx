import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';


function Header() {
    const projectInfo="Job seekers today face a more complex hiring landscape than ever. With automated screening systems (ATS), rapidly shifting job descriptions, and increasing competition, it’s not enough to simply write your experience. You need a resume that is well-written, well-structured and tailored to your target role. Traditional methods often mean starting from a blank page, wrestling with formatting, or relying on generic templates that don’t reflect you."
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor:'purple'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <img width={'30px'} src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png" alt="logo" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
                    </Typography>
                   <Tooltip title={projectInfo}> <Button color="inherit">Login</Button></Tooltip>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Header