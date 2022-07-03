import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./globalState/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
});

const theme = extendTheme({
  colors: {
    brand: {
      300: "#8E88F7",
      500: "#6C63FF",
      600: "#36328A",
    },
    themeLight: {
      bg: "white",
      textColor: "black",
      icon: "#6C63FF",
      logo: "#36328A",
    },
    themeDark: {
      bg: "#1A202C",
      textColor: "white",
      bgBody: "#032033",
      icon: "white",
      logo: "white",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
