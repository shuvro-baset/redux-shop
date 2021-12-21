import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


