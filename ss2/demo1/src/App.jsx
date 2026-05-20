import './App.css'
import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import HeaderComponent from "./layout/HeaderComponent.jsx";
import ListComponent from "./function_component/student/ListComponent.jsx";
import {Routes,Route} from "react-router-dom";
import HomeComponent from "./function_component/student/HomeComponent.jsx";
import AddComponent from "./function_component/student/AddComponent.jsx";
import DetailComponent from "./function_component/student/DetailComponent.jsx";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import {ToastContainer} from "react-toastify";
import LoginComponent from "./function_component/user/LoginComponent.jsx";


function App() {

    return (
        <>
            <ToastContainer/>
            <HeaderComponent/>
            <Routes>
                <Route path={'/'} element={<HomeComponent/>}/>
                <Route path={'/login'} element={<LoginComponent/>}/>
                <Route path={'/student/list'} element={<ListComponent/>}/>
                <Route path={'/student/add'} element={<AddComponent/>}/>
                <Route path={'/student/detail/:id'} element={<DetailComponent/>}/>
            </Routes>
        </>
    );
}

export default App
