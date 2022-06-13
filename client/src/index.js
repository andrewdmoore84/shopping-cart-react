import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { ProductProvider } from './context/productsContext';
import { CartItemProvider } from './context/cartItemsContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartItemProvider>
        <App />
      </CartItemProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
