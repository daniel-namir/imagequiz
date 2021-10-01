import Home from './Home';
import Register from './Register';
import Login from './Login';
//import Navigation from './Navigation';
import './App.css';
//import Layout from ".components/Layout";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
