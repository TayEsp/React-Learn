import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  //nesse local podemos colocar as partes de javaScript
  var name = "Leticia"
  //nessa funcao return colocamos tudo que é HTML
  return (
    <div className="App">
      <SayMyName nome="Tayna"/>
      <SayMyName nome={name}/>
      <Pessoa nome="Tayna" idade="22" profissao="Programadora" foto="https://via.placeholder.com/50"/>
    </div>
  );
}

export default App;
