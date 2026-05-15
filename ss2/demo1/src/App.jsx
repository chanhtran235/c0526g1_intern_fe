import './App.css'
import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import HeaderComponent from "./component_class/HeaderComponent.jsx";
import ListComponent from "./function_component/ListComponent.jsx";
import {Routes,Route} from "react-router-dom";
import HomeComponent from "./function_component/HomeComponent.jsx";
import AddComponent from "./function_component/AddComponent.jsx";
import DetailComponent from "./function_component/DetailComponent.jsx";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"


function App() {

    return (
        <>
            <HeaderComponent/>
            <Routes>
                <Route path={'/'} element={<HomeComponent/>}/>
                <Route path={'/student/list'} element={<ListComponent/>}/>
                <Route path={'/student/add'} element={<AddComponent/>}/>
                <Route path={'/student/detail/:id'} element={<DetailComponent/>}/>
            </Routes>
        </>
    );
}

export default App
