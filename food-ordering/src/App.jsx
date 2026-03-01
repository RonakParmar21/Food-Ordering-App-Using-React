import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";

// make site in smaller part
// chunking
// code spliting
// dynamic bundling
// lazy loading
// on demand loading

// this code only import when go to grocery component which is whenever call
const Grocery = lazy(() => {
  import("./components/Grocery");
});

function App() {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
