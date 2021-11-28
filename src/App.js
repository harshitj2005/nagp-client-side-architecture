
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './component/home';
import Hangman from './component/hangman';
import Tictac from './component/tictac';



function App() {
  return (
    <Router>
        <div className="App">
        <ul className="App-header1">
          <li>
            <button><Link to="/">Home</Link></button>
          </li>
          <li>
            <Link to="/hangman"><button>Hangman</button></Link>
          </li>
          <li>
            <Link to="/tictac"><button>Tic Tac</button></Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/hangman' component={Hangman}></Route>
          <Route exact path='/tictac' component={Tictac}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
