
import './App.css'
import React from "react";
import {getAll} from "./service/studentService.js";
import "bootstrap/dist/css/bootstrap.css"

function App() {

  return (
      <>
       <h1 className={'my-title'}> Student List</h1>
          <button  className={'btn btn-sm btn-success w-25'}> Add new student</button>
        <table className={'table table-striped table-dark'}>
          <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {
            getAll().map((s,i)=>(
              <tr key={s.id}>
                <td>{i+1}</td>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td><button className={'btn btn-sm btn-danger'}>Delete</button></td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </>
  );
}

export default App
