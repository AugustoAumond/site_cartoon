import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Routes/homepage/HomePage";
import Login from './Routes/login/Login';
import Cadastrar from './Routes/cadastrar/Cadastrar';
import User from './Routes/user/User';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/cadastrar" element={<Cadastrar />}>
            </Route>
            <Route path="/user" element={<User />}>
            </Route>
        </Routes>
    </Router>
  </React.StrictMode>
)
