import { CurrencyConverterProvider } from "./hooks/useCurrencyConverter"
import { Home } from "./pages/Home"
import GlobalStyle from "./styles/GlobalStyles"

function App() {

  return (
    <>
      <CurrencyConverterProvider>
        <Home />
        <GlobalStyle />
      </CurrencyConverterProvider>
    </>
  )
}

export default App
