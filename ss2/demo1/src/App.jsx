import './App.css'
import React from "react";
import {getAll} from "./service/studentService.js";
import "bootstrap/dist/css/bootstrap.css"
import HeaderComponent from "./component_class/HeaderComponent.jsx";
import ListComponent from "./component_class/ListComponent.jsx";

function App() {

    return (
        <>
            <HeaderComponent/>
            <ListComponent/>
        </>
    );
}

export default App
