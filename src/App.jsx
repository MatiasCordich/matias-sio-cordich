import Box from './components/Box/Box'
import {Navbar} from './components/Navbar/Navbar'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 220rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const App = () => {
  return (
    <Container>
      <Navbar/>
      <Box/>
    </Container>
  )
}


export default App
