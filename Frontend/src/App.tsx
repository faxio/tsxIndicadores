import { ThemeProvider } from 'styled-components'
import './App.css'
import "./components/navbar.css"
import theme from './components/Themes/Theme'
import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRouter/>
      </ThemeProvider>
    </>

  )
}

export default App
