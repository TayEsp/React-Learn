import './App.css';
import Evento from './components/Evento';
import Forms from './components/Forms';

function App() {
  //nesse local podemos colocar as partes de javaScript

  //nessa funcao return colocamos tudo que é HTML
  return (
    <div className="App">
        <Evento numero="1"/>
        <Evento numero="2"/>
        <Forms/>
    </div>
  );
}

export default App;
