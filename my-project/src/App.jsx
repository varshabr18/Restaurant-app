import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./component/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import useMainCard from "./utils/useMainCard";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";


function App() {
  const [userName, setUserName] = useState();
  const restaurantData = useMainCard();

 

  useEffect(() => {
    const data = {
      name: "varshini",
    };
    setUserName(data.name);
  }, []);
  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ LoggedInUserName: userName }}>
          <Header {...restaurantData} />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
