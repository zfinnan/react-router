// third party
import { BrowserRouter, Route } from 'react-router-dom'

// your own components
import Home from './Components/Home';
import Contact from './Components/Contact';
import Procedures from './Components/Procedures';

// style
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/procedures" component={Procedures} />
    </div>
    </BrowserRouter>
  );
}

export default App;
