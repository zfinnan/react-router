// third party
import { BrowserRouter, Route } from 'react-router-dom'

// your own components
import Home from './Components/Home';
import Contact from './Components/Contact';
import Procedures from './Components/Procedures';
import ProcedureDetails from './Components/ProcedureDetails'
import Nav from './Components/Nav'

// style
import './App.css';

function App() {

  const proceduresList = [
    {
      name: 'Root Canal',
      id: 1,
      description: 'Very painful'
    },
    {
      name: 'Crown',
      id: 2,
      description: 'Absolutely awful :('
    },
    {
      name: 'Cleaning',
      id: 3,
      description: 'Routine torture'
    },
  ]

  return (
    <BrowserRouter>
    <div className="App">
      <Nav />

      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route 
        exact
        path="/procedures" 
        render={() => { return <Procedures proceduresList={proceduresList} />}} 
      />
      <Route 
        path="/procedures/:id" 
        render={(routeInfo) => {
          const id = routeInfo.match.params.id
          const targetProcedure = proceduresList.find((p) => p.id === parseInt(id))
          return <ProcedureDetails procedure={targetProcedure} />
        }} 
      />
    </div>
    </BrowserRouter>
  );
}

export default App;
