// import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './components/pages/HomePage';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './components/organisms/Responsive-app-bar.jsx'
import Footer from './components/organisms/footer/Footer.jsx'
import Container from '@mui/material/Container';

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'light' : 'dark',
          primary: {
            main: '#2175d9;'
          },
          secondary: {
            main: '#838991;'
          },
  
        },
        typography: {
   
          fontSize: 15,
          h1: {
            // incase
            fontFamily: 'Roboto',
            fontSize: 15
          }
        },
        shape: {
          borderRadius: 0
        }
      }),
    [prefersDarkMode],
  );
  // flexGrow: 1,
  // padding: 20
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" >
        <ResponsiveAppBar />
        <Container maxWidth="xl">
          <HomePage />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;