import './App.css';
import Evento from './components/Evento';
import Forms from './components/Forms';

function App() {
  //nesse local podemos colocar as partes de javaScript

  //nessa funcao return colocamos tudo que é HTML
  return (
    <div className="App">
        <Evento />
        <Forms/>
    </div>
  );
}

export default App;
