import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./globalState/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

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
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
