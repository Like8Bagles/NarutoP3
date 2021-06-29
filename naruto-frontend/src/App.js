import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Sensei from './containers/Sensei'
import Navigation from './components/Navigation';
import OneSensei from './containers/OneSensei';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>   
          <Route exact path='/' component={Home} />
          <Route exact path='/sensei' component={Sensei} />
          <Route exact path='/sensei/:id' component={OneSensei} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
