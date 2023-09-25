import HelloWord from './components/HelloWord';
import './App.css';

function App() {
  const name = "Mel"
 
  const newName = name.toUpperCase( )

  const url = 'https://via.placeholder.com/150'

  return (
    <div className= "app">
      <h2>ALTERANDO O JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {5 + 5}</p>
      <img src = {url} alt= "Minha imagem"></img>
      <HelloWord/>
    </div>
   
    )
}

export default App;
