import React, { useContext } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from '../themes'
import InputBase from '@mui/material/InputBase'
import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutlined, Search } from '@mui/icons-material'
const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      <Box
        display='flex'
        backgroundColor={colors.primary[400]}
        borderRadius='3px'
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{p:1}}>
          <Search />
        </IconButton>
      </Box>
      <Box display='flex'>
        <IconButton>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined onClick={colorMode.toggleColorMode}/>
          ) : (
            <LightModeOutlined onClick={colorMode.toggleColorMode}/>
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar