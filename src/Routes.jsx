import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Routes/homepage/HomePage";
import Login from './Routes/login/Login';
import Cadastrar from './Routes/cadastrar/Cadastrar';
import User from './Routes/user/User';
import Obras from './Routes/obras/Obras';
import Feed from './Routes/feed/Feed';

function MainRoutes (){
    return (
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

            <Route path="/obras/:id" element={<Obras />}>
            </Route>
            
            <Route path="/feed/:user" element={<Feed />}>
            </Route>
        </Routes>
    </Router>
    )
}
export default MainRoutes;