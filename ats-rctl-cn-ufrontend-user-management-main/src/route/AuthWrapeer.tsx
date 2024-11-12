import { UserRoleProvider } from "../context/userContextRoles";
import { OidcProvider } from "../oidc";

export const AuthWrapper = ({ children }) => {
  return (
    <OidcProvider>
      <UserRoleProvider>{children}</UserRoleProvider>
    </OidcProvider>
  );
};
