import React from "react";
import { useOidc } from "../oidc";

export function ButtonLogin() {
  const { isUserLoggedIn, login, logout } = useOidc();

  return (
    <div className="xl:flex items-center space-x-5">
      <div className="hover:text-gray-200">
        {isUserLoggedIn ? (
          <button
            type="button"
            className="text-blue-800"
            onClick={() => logout({
              redirectTo: "current page"
            })}
          >
            Logout
          </button>
        ): (
          <button
            type="button"
            className="text-blue-800"
            onClick={() => login({doesCurrentHrefRequiresAuth: false})}
          >
            Login
          </button>
        )
      }
      </div>
    </div>
  );
}
