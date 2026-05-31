import { createContext } from "react";

const UserContext = createContext({
  LoggedInUserName: "defaultUser",
});

export default UserContext;
