import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sports from './pages/Sports';
import LiveReal from './pages/LiveReal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/sports' component={Sports}/>
        <Route path='/live-and-real' component={LiveReal}/>
      </Switch>
    </div>
  );
}

export default App;
