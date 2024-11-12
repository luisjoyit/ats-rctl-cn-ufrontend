import { useOidc } from "../oidc";
import { decodeJwt } from "oidc-spa/tools/decodeJwt";

export interface DecodedAccessToken {
  exp:                number;
  iat:                number;
  auth_time:          number;
  jti:                string;
  iss:                string;
  aud:                string;
  sub:                string;
  typ:                string;
  azp:                string;
  sid:                string;
  acr:                string;
  "allowed-origins":  string[];
  realm_access:       RealmAccess;
  resource_access:    ResourceAccess;
  scope:              string;
  email_verified:     boolean;
  name:               string;
  preferred_username: string;
  given_name:         string;
  family_name:        string;
  email:              string;
}

export interface RealmAccess {
  roles: string[];
}

export interface ResourceAccess {
  account: RealmAccess;
}


export const useKeycloakHookAuth = () => {
  const { oidcTokens, authMethod, backFromAuthServer } = useOidc({ assertUserLoggedIn: true });
  const decodedAccessToken = decodeJwt(oidcTokens.accessToken) as DecodedAccessToken;

  console.log("oidcTokens.decodedIdToken", decodedAccessToken.email);
  console.log("idToken", oidcTokens.accessToken);

  return { oidcTokens, decodedAccessToken , authMethod, backFromAuthServer };
};


export const useKeycloakHook = () => {
  const { isUserLoggedIn, oidcTokens, login, logout } = useOidc();

  return { isUserLoggedIn, oidcTokens , login, logout };
};
  