import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import logo_basto from '../../assets/images/logo_basto.png';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{backgroundColor:'white'}} position="static">
                <Toolbar>
                    <img style={{ width: 100 }} alt='Extrados.com' heigth='25px' src={logo_basto}></img>

                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2, ml:'auto' }}
                    >
                        <LogoutRoundedIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}