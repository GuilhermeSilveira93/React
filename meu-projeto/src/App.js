import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome='Guilherme'/>
      <Pessoa nome='Layane' profissao='Estetica' idade='25' foto='' />
    </div>
  );
}

export default App;
