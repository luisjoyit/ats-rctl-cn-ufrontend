import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

//exportaciones de los componetes de keycloak
export { ButtonLogin } from "./components/buttonLogin";
export { AuthWrapper } from "./route/AuthWrapeer";
export { useKeycloakHookAuth, useKeycloakHook } from "./hooks/useKeycloakHook";
export { protectedRouteLoader } from "./route/protected-route";
export { getOidc } from "./oidc";
export { decodeJwt } from "oidc-spa/tools/decodeJwt";
export { useUserRole } from "./context/userContextRoles";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  renderType: "createRoot",
});

export const { bootstrap, mount, unmount } = lifecycles;
