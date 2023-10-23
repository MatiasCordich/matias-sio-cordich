import styled, { ThemeProvider } from 'styled-components'
import Box from './components/Box/Box'
import { Navbar } from './components/Navbar/Navbar'
import { useThemeMode } from "./hooks/useThemeMode";
import { GlobalStyle } from './gloabalStyles.js'
import { themes } from './themes/theme';

const Container = styled.div`
  max-width: 220rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const App = () => {

  const [theme, toggleTheme] = useThemeMode()

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Container>
        <Navbar handleClick={toggleTheme}/>
        <Box />
      </Container>
    </ThemeProvider>
  )
}


export default App
