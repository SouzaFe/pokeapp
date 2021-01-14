import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

//<Route path='/Pokemon/:name' component={PokemonDetail} />

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={PokemonList} />
          <Route path='/Pokemon/:name' component={PokemonDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
