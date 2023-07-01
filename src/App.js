import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import { images } from './data/images';

function App() {
  return (
    <div className="container">
      <Portfolio images={ images }/>
    </div>
  );
}

export default App;
