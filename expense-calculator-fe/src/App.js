import React from "react";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faPlusCircle,  faEdit} from '@fortawesome/free-solid-svg-icons';
import Main from "./components/Main";

library.add(faTrashAlt, faPlusCircle, faEdit);


function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
