import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Users from "./components/Users";
import Update from "./components/Update";
import { useState } from "react";

function App() {
  const location = useLocation();
  const path = location.pathname;
  // const [userId, setUserId] = useState("");
  // const getUpdateUser = (id) => {
  //   setUserId(id);
  // };

  const [user, setUser] = useState("");
  const getUpdateUser = (data) => {
    setUser(data);
  };

  return (
    <>
      {path !== "/" && (
        <NavLink className="link" to="/">
          Home
        </NavLink>
      )}

      <Routes>
        <Route path="/" element={<Users getUpdateUser={getUpdateUser} />} />
        {/* <Route path="/update" element={<Update userId={userId} />} /> */}
        <Route path="/update" element={<Update user={user} />} />
      </Routes>
    </>
  );
}

export default App;
