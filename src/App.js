import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppContainer from './AppContainer';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
