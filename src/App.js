import { ColorModeContext, useMode } from './themes' 
import { CssBaseline, ThemeProvider } from '@mui/material'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import Contacts from './pages/Contacts'
import { Route, Routes } from 'react-router-dom'
import Invoices from './pages/Invoices'
import Form from './pages/Form'
import Calendar from './pages/Calendar'
import Faq from './pages/Faq'
import Bar from './pages/Bar'
import Pie from './pages/Pie'
import Line from './pages/Line'
import Geo from './pages/Geo'
function App() {

  const [theme,colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <SideBar />
          <main className='content'>
            <TopBar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/calendar' element={<Calendar/>} />
              <Route path='/faq' element={<Faq/>} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/pie' element={<Pie/>} />
              <Route path='/line' element={<Line/>} />
              <Route path='/geo' element={<Geo/>} />
            </Routes>
          </main>
      </div>
      </ThemeProvider>
  </ColorModeContext.Provider>
    
  );
}

export default App;
