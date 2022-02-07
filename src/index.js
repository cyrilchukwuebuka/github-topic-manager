import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { extendTheme } from "@chakra-ui/react";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const theme = extendTheme({
  colors: {
    brand: {
      300: '#8E88F7',
      500: '#6C63FF',
      600: '#36328A',
    },
    themeLight: {
      bg: 'white',
      textColor: 'black',
      icon: '#6C63FF',
      logo: '#36328A'
    },
    themeDark: {
      bg: '#1A202C',
      textColor: 'white',
      bgBody: '#032033',
      icon: 'white',
      logo: 'white'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();