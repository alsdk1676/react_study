// import './App.css';
// import Jsx01, { Jsx02, Jsx03 } from './docs/components/Jsx01';
import GlobalStyle from './global/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import Counter from './pages/docs/count/Counter';
import FontButtonComponent from './pages/docs/font/FontButtonComponent';


function App() { 
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FontButtonComponent />
      </ThemeProvider> 
    </>
  );
}
export default App;
