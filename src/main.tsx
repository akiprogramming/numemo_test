import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import { ChakraProvider } from "@chakra-ui/react";

// const router = createBrowserRouter(createRoutesFromElements(<Root />));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
// );
