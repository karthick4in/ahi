
import * as React from "react";

const authContext = React.createContext();

function useAuth() {
    const [authed, setAuthed] = React.useState(localStorage.getItem("login") || false);
  
    return {
      authed,
      login() {
        return new Promise((res) => {
          localStorage.setItem("login",true)
          setAuthed(true);
          res();
        });
    },
    logout() {
        return new Promise((res) => {
            localStorage.setItem("login",false)
          setAuthed(false);
          res();
        });
      },
    };
  }
  export default useAuth;
