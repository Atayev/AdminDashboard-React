import { ColorModeContext, useMode } from './themes' 
import { CssBaseline, ThemeProvider } from '@mui/material'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import Contacts from './pages/Contacts'
import { Route, Routes } from 'react-router-dom'
import Invoices from './pages/Invoices'
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
            </Routes>
          </main>
      </div>
      </ThemeProvider>
  </ColorModeContext.Provider>
    
  );
}

export default App;
