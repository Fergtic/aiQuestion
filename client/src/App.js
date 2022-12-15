import React from "react";
import { lazy, Suspense } from "react";

import { Routes, Route, Outlet} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { Test } from "./pages/testSwitch";
import PostPage from "./components/postPage";

import './App.css'
import * as ROUTES from "./constants/routes.js"

//const Dashboard = lazy(() => import('./pages/dashboard'))





const App = () => {
 return (
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
      <Route path={ROUTES.POST} element={<PostPage/>}/>
    </Routes>
 );
};
 
export default App;