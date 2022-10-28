import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import BarChart from '../components/BarChart'
function Bar() {
  return (
      <Box m='20px'>
          <Header title='BAR Chart' subtitle='Simple Bar chart' />
          <Box height='75vh'>
              <BarChart />
          </Box>
    </Box>
  )
}

export default Bar