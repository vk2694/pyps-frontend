import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import PageNotFound from "./components/pagenotfound";
import Project from "./components/project";
import Task from "./components/task";
import { RolePermission } from "./Context/RolePermission";

function App() {
  const [roleData, setRoleData] = useState();
  return (
    <BrowserRouter>
      <RolePermission.Provider value={{ roleData, setRoleData }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/task" element={<Task />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </RolePermission.Provider>
    </BrowserRouter>
  );
}

export default App;
