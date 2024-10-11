import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Container, IconButton, MenuItem, Menu, Divider } from '@mui/material';
import Link from 'next/link';
import { AccountCircle } from '@mui/icons-material';


export default function ButtonAppBar() {

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Container 
          maxWidth='lg'
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link href="/user/publish" passHref legacyBehavior>
              <Button 
                color="inherit" 
                variant='outlined'
                component='a'
                sx={{ 
                  color: 'white',  // Força a cor do texto ser branca
                  borderColor: 'white', // Força a borda branca
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)' // Adiciona um efeito hover leve
                  }
                }}
                
              >
                Anunciar e Vender
              </Button>
            </Link>

            <IconButton color='secondary'
              onClick={(e) => {
                setAnchorUserMenu(e.currentTarget)
              }}
            >
              {
                true === false
                ? 
                
                <Avatar 
                  src=""
                />

                :

                <AccountCircle />
              }

              <Typography variant='subtitle2' color='secondary' sx={{ml:1}}> 
                Arthur Bitencourt
              </Typography>
            </IconButton>
          </Toolbar>

          <Menu
            anchorEl={anchorUserMenu}
            open={openUserMenu}
            onClose={() => {
              setAnchorUserMenu(null)
            }}
          >
            <Link href='/user/dashboard' passHref legacyBehavior>
              <MenuItem 
                
                component='a'
              >Meus anúncios</MenuItem>            
            </Link>
            <Link href='/user/publish' passHref legacyBehavior>
              <MenuItem 
                component='a'
                
              >Publicar novo anúncio</MenuItem>
            </Link>
            <Divider />
            <MenuItem>Sair</MenuItem>
          </Menu>
        </Container>
      </AppBar>
    </Box>
  );
}
