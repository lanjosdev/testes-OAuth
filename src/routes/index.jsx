// Funcionalidades / Libs:
import { Routes, Route } from "react-router-dom";

// Pages:
import Login from "../pages/Login";
import Private from "../pages/Private";


// Components:
import PrivateRoute from "./privateRoute";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Login /> } />

            <Route path="/private" element={ 
                <PrivateRoute> <Private/> </PrivateRoute>  
            }/>
        </Routes>
    )
}