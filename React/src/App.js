import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import 'bootstrap'

function App() {
  return (
    <div className="App">
      <div>
     <NavBar />
      <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
     <Edit/>
     <RecordList/>
     
   </div>
    </div>
  );
}

export default App;
