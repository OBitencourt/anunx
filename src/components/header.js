import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Container, IconButton, MenuItem, Menu, Divider } from '@mui/material';
import Link from 'next/link';
import { AccountCircle } from '@mui/icons-material';

import { useSession, signOut } from 'next-auth/react';

export default function ButtonAppBar() {

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  const { data: session} = useSession()

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
            <Link href={ session ? '/user/publish' : '/auth/signin'} passHref legacyBehavior>
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
                  },

                  marginRight: 2
                }}
                
              >
                Anunciar e Vender
              </Button>
            </Link>
            
            {

              session 

              ? (

                <IconButton color='secondary'
                  onClick={(e) => {
                    setAnchorUserMenu(e.currentTarget)
                  }}
                >
                  {
                    session.user.image
                    ? 
                    
                    <Avatar 
                      src={session.user.image}
                    />

                    :

                    <AccountCircle />
                  }

                  <Typography variant='subtitle2' color='secondary' sx={{ml:2}}> 
                    {session.user.name}
                  </Typography>
                </IconButton>

              )

              : null
            }
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
            <MenuItem
              onClick={() => {
                signOut({callbackUrl: '/'})
              }}
            >
              Sair
            </MenuItem>
          </Menu>
        </Container>
      </AppBar>
    </Box>
  );
}
