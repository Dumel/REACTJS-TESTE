
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frases';

function App() {
  const name = 'Maria'

  return (
    <div className= "app">
      <h1>Testando CSS</h1>
      <Frase/>
      <SayMyName nome = "Matheus" />
      <SayMyName nome = {name} />
      <Pessoa
        nome="Melqui"
        idade="17"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />

    </div>
   
    )
}

export default App;
