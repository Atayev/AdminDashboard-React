import { ColorModeContext, useMode } from './themes' 
import { CssBaseline, ThemeProvider } from '@mui/material'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
function App() {

  const [theme,colorMode] = useMode()

  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'>
            <TopBar />
            <SideBar />
            <Routes>
              {/* <Route path='/' element={<Dashboard />} /> */}
            </Routes>
          </main>
      </div>
      </ThemeProvider>
  </ColorModeContext.Provider>
    
  );
}

export default App;
