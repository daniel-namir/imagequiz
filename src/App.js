import Home from './Home';
import Register from './Register';
import Login from './Login';
import Quiz from './Quiz';
//import Navigation from './Navigation';
import './App.css';
//import Layout from ".components/Layout";
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/admin"> 
          <Admin/> 
        </PrivateRoute>
        <Route exact path="/" component={Home}/>
        <Route exact path="/quiz/:quizName" component={Quiz}/>
      </Switch>
    </HashRouter>
  );
}

let PrivateRoute = ({ children, ...rest }) => {
  let customer = localStorage.getItem('customer');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        customer ? (
           children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
