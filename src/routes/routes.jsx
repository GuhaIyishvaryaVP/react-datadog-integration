import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Monitor from "../pages/Monitor";
import Metrics from "../pages/Metrics";
import WebhookEvents from "../pages/WebHook";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to='monitor' />,
      },
      {
        path: "monitor",
        element: <Monitor />,
      },
      {
        path: "metrics",
        element: <Metrics />,
      },
      {
        path: "webhooks",
        element: <WebhookEvents />,
      },
    ],
  },
]);
