import {
   createTheme,
   StyledEngineProvider,
   ThemeProvider,
} from '@mui/material';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import store from '../utils/store';

const theme = createTheme({
   breakpoints: {
      values: {
         xs: 0,
         sm: 640,
         md: 768,
         lg: 1024,
         xl: 1280,
         '2xl': 1536,
      },
   },
});

function MyApp({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
               <NextNProgress height={5} color='#FF4500' />
               <Component {...pageProps} />
               <ToastContainer />
            </StyledEngineProvider>
         </ThemeProvider>
      </Provider>
   );
}

export default MyApp;
