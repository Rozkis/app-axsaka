

import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

const jsonAlumnos = [
  {
      key: "1",
      name: "Alvarez Flores Jesús Manuel"
  }, {
      key:"2",
      name: "Castañeda Vega Gerardo" 
  }, {
      key: "3",
      name: "Castellanos Flores Héctor Gerardo"
  }, {
      key: "4",
      name: "Duarte García Rosa María"
  }, {
      key: "5",
      name: "Martínez Gonzáles Leonardo"
  }, {
      key: "6",
      name:"Ruíz Leo Leonardo"
  }, {
      key: "7",
      name: "Montejano Guerreo Salvador"
  },{
      key: "8",
      name: "Rojas López Luis Fernando"
  }
];

function App() {
const [isLoading,setIsLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
      setIsLoading(false);
}, 4000 )
}, [])

const renderData = () => {
  return jsonAlumnos?.map((value) =>  (
      <div key= {value.key}>
      <p> {value.name}</p>
      </div>
  ))
}
return (
  <div className="App">
      {isLoading ? <h2>Is Loading...</h2> : renderData()}
  </div>
);

}

export default App;
