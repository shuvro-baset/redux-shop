import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="home">
            <Home></Home>
          </Route>
          <Route exact path="cart">
            <Cart></Cart>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


