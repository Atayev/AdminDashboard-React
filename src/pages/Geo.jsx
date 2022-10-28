import { Box } from '@mui/material'
import Header from '../components/Header'
import GeoChart from '../components/GeoChart'
import { useTheme } from '@mui/material'
import { tokens } from '../themes'
function Geo() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
          <Header title='Geo Chart' subtitle='Simple Line chart' />
          <Box height='75vh' border={`1px solid ${colors.gray[100]}`} borderRadius='4px'>
              <GeoChart />
          </Box>
    </Box>
  )
}

export default Geo