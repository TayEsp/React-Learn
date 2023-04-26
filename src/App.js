import './App.css';
import Helloword from './components/HelloWord'

function App() {
  //nesse local podemos colocar as partes de javaScript

  var name = "Tanya"
  var novoNome = name.toLocaleUpperCase()

  //nessa funcao return colocamos tudo que é HTML
  return (
    <div className="App">

      <Helloword/>
      <h4>Olá, {novoNome}</h4>
      
    </div>
  );
}

export default App;
