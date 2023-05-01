import './App.css';
import Lista from './components/Lista';

function App() {
  //nesse local podemos colocar as partes de javaScript
  const meusItens = ['react', 'Vue', 'Angular']
  //nessa funcao return colocamos tudo que é HTML
  return (
    <div className="App">
        <h1>Renderização de Listas</h1>
        <Lista itens={meusItens}/>
        <Lista itens={[]}/>
    </div>
  );
}

export default App;
