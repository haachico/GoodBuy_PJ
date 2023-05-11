import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import { booksContext, Provider } from "./useContext/booksContext";

export { booksContext };
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Auth0Provider
    domain="dev-cqd70iq1n1ef0qen.us.auth0.com"
    clientId="67RyjMDRPA16e2BvXAeVpIR1pWn9rQAz"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider>
      <App />
    </Provider>
  </Auth0Provider>
);
