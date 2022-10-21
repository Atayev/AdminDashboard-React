import React, {useState} from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../themes'
import { HomeOutlined, PeopleOutline, ContactsOutlined, ReceiptOutlined, PersonOutline, CalendarToday, HelpOutlined, BarChartOutlined, PieChartOutline, TimelineOutlined, MenuOutlined, MapOutlined } from '@mui/icons-material'
import profilePicture from '../assets/user.png'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem active={selected === title} style={{ color: colors.gray[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{ title }</Typography>
      <Link to={ to } />
    </MenuItem>
  )
}

const SideBar = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')
  
  return (
    <Box
      sx={{
        " & .pro-sidebar-inner": {
          background:`${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor:'transparent !important'
        },
        "& .pro-inner-item": {
          padding:'5px 35px 5px 20px!important'
        },
        "& .pro-innter-item:hover": {
          color: '#868dfb !important'
        },
        "& .pro-menu-item.active": {
          color:'#6870fa !important'
        }
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.gray[100],
            }}
          >
             {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.gray[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {
            !isCollapsed && (
              <Box mb='25px'>
                <Box display='flex' justifyContent='center' alignItems='cnter'>
                  <img
                    src={profilePicture}
                    alt='profile'
                    width='100px'
                    height='100px'
                    style={{cursor:"pointer",borderRadius:'50%'}}
                  />
                </Box>
                <Box textAlign='center'>
                  <Typography
                    variant='h2'
                    color={colors.gray[100]}
                    fontWeight='bold'
                    sx={{ mt: '10px' } }
                      > Ibrahim Atayev
                    </Typography>
                  <Typography
                  variant='h5'
                  color={colors.greenAccent[500]}
                  >Admin</Typography>
                </Box>
              </Box>
            )}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title='Dashboard'
              to='/'
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
    </ProSidebar>
    </Box>
  )
}

export default SideBar