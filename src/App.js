import './App.css';
import { Attributes } from './components/attributes/Attributes';
import { Classes } from './components/classes/Classes';

function App() {
  return (
    <div className="App">
      <section style={{display: 'flex'}}>
        <div className='column'><Attributes /></div>
        <div className='column' style={{width: '150px'}}>
          <Classes />
        </div>
      </section>
    </div>
  );
}

export default App;
