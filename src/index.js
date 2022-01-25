import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      300: '#8E88F7',
      500: '#6C63FF',
      600: '#36328A',
    },
    themeLight: {
      bg: 'white',
      icon: '#6C63FF',
      logo: '#36328A'
    },
    themeDark: {
      bg: '#1A202C',
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