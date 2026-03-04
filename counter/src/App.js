import './App.css';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <Counter />
      <CounterClass />
    </div>
  );
}

export default App;
