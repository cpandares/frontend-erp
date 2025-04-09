import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import './styles.css';
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';


createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
        </Provider>
    </React.StrictMode>
    );