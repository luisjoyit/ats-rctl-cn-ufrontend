import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import type { DecodedAccessToken } from "../hooks/useKeycloakHook";
import { useKeycloakHook } from "../hooks/useKeycloakHook";
import { decodeJwt } from "../joyit-user-management";

export type UserTypes = "applicant" | "recruiter" | "public";

interface UserContextType {
  viewUser: UserTypes;
  setViewUser: React.Dispatch<React.SetStateAction<UserTypes>>;
  userInfo: DecodedAccessToken | undefined;
}

export const UserRoleContext = createContext<UserContextType | undefined>(undefined);

interface CounterProviderProps {
  children: ReactNode;
}

export const UserRoleProvider = ({ children }: CounterProviderProps) => {
  const { isUserLoggedIn, oidcTokens } = useKeycloakHook();
  const [ userInfo, setUserInfo ] = useState<DecodedAccessToken>();
  const [viewUser, setViewUser] = useState<UserTypes>("public");

  useEffect(() => {
    if (!isUserLoggedIn) {
      setViewUser("public");
      return
    }

    const decodedAccessToken = decodeJwt(oidcTokens?.accessToken) as DecodedAccessToken;
    setUserInfo(decodedAccessToken);

    if (decodedAccessToken.realm_access.roles.includes("applicant")) {
      setViewUser("applicant");
    } else if (decodedAccessToken.realm_access.roles.includes("recruiter")) {
      setViewUser("recruiter");
    } else {
      setViewUser("public");
    }

  }, [setViewUser]);

  return (
    <UserRoleContext.Provider value={useMemo(() => ({ viewUser, setViewUser, userInfo }), [viewUser, setViewUser, userInfo])}>
      {children}
    </UserRoleContext.Provider>
  )
}

export function useUserRole() {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error("el hook debe estar dentro de un provider");
  }
  return context;
}
