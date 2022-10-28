import { Box } from '@mui/material'
import Header from '../components/Header'
import LineChart from '../components/LineChart'
function Line() {
  return (
    <Box m='20px'>
          <Header title='Line Chart' subtitle='Simple Line chart' />
          <Box height='75vh'>
              <LineChart />
          </Box>
    </Box>
  )
}

export default Line