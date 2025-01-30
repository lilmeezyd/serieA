import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute.jsx";
import RequestPasswordReset from "./components/RequestPasswordReset.jsx"
import ResetPassword from "./components/ResetPassword.jsx"
import Admin from "./screens/Admin.jsx"
import Login from "./screens/Login.jsx"
import HomeScreen from "./screens/HomeScreen.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/request-password-reset"
        element={<RequestPasswordReset />}
      />
      <Route path="/password-reset" element={<ResetPassword />} />

      {/* Private Routes */}
      {/*<Route path="" element={<PrivateRoute />}>*/}
        <Route path="/admin" element={<Admin />} />
      {/*</Route>*/}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </Provider>
);
