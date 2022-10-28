import React from 'react'
import { Box, useTheme,Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMore } from '@mui/icons-material'
import { tokens } from '../themes'
import Header from '../components/Header'
function Faq() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
      <Box m='20px'>
          <Header title='FAQ' subtitle='Frequently asked questions page' />
          <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography color={colors.greenAccent[500]} variant='h5'>
                      An Important Question
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam repudiandae nihil iusto iste corrupti esse ea, officia exercitationem quisquam, enim earum est voluptate illo voluptatem repellat modi! Ad, fuga!
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography color={colors.greenAccent[500]} variant='h5'>
                      Question
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam repudiandae nihil iusto iste corrupti esse ea, officia exercitationem quisquam, enim earum est voluptate illo voluptatem repellat modi! Ad, fuga!
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography color={colors.greenAccent[500]} variant='h5'>
                      Another Important Question
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam repudiandae nihil iusto iste corrupti esse ea, officia exercitationem quisquam, enim earum est voluptate illo voluptatem repellat modi! Ad, fuga!
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography color={colors.greenAccent[500]} variant='h5'>
                      Your Favorite Important Question
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam repudiandae nihil iusto iste corrupti esse ea, officia exercitationem quisquam, enim earum est voluptate illo voluptatem repellat modi! Ad, fuga!
                  </Typography>
              </AccordionDetails>
          </Accordion>
    </Box>
  )
}

export default Faq