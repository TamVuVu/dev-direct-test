import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminPage } from "./Pages/Admin";
import { ConsumerPage } from "./Pages/Consumers";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/consumers",
    element: <ConsumerPage />,
  },
]);

root.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
