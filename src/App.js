import './App.css';
import {useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  //nesse local podemos colocar as partes de javaScript
  const [nome, setNome] = useState()
  //subimos o state para o componente que é comum dos componentes que estamos utilizando
  return (
    <div className="App">
        <h1>State Lift</h1>
        <SeuNome setNome = {setNome}/>
        <Saudacao nome = {nome}/>
    </div>
  );
}

export default App;
