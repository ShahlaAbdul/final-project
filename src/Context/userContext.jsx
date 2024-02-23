/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect} from "react";
import { jwtDecode } from "jwt-decode";
import useLocalStorage from "../hook/useLocalStorage";
import Cookies from "js-cookie";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
  // const [token, setToken] = useLocalStorage(
  //   Cookies.get("token") ? Cookies.get("token") : null
  // );
  // const [decode, setDecode] = useLocalStorage(null);

  const [token, setToken] = useLocalStorage("token", null);
  const [decode, setDecode] = useLocalStorage("decode" , null);
  

    function addToken(token) {
      setToken(token);
      const tokenDecoded = jwtDecode(token);
      setDecode(tokenDecoded);
    }
function logOut() {
  setToken(null);
  setDecode(null);
  localStorage.clear();
}
  
  const data = {
    token,
    decode,
    addToken,
    logOut,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserProvider;
