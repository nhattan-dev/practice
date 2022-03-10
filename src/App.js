import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login'
import Admin from './components/Admin';
import User from './components/User';
import Home from './components/Home';
import { ThemeContext } from './context/ThemeContext';
import ValueStored from './helper/key'
import EndPoint from './helper/endpoint'
import SearchResult from './components/SearchResult';
import Cart from './components/Cart';
import Product from './components/Product';
// import HotelDatePicker from "./components/HotelDatePicker"
// import { Col, Row } from 'reactstrap';

function App() {

  const themes = {
    foreground: "#000000",
    background: "#F63E2E"
  }

  return (
    // <Row>
    //   <Col md="auto" className="p-5 m-5">
    //     <HotelDatePicker/>
    //   </Col>
    // </Row>
    <Router>
      <Switch>
        <ThemeContext.Provider value={themes}>
          <Route exact path={EndPoint.Home} component={Home} />
          <Route exact path={EndPoint.Search} component={SearchResult} />
          <Route exact path={EndPoint.Cart} component={Cart} />
          <Route exact path={EndPoint.Product} component={Product} />
          <Route path={EndPoint.Admin} render={() => {
            return localStorage.getItem(ValueStored.Admin)
              ? <Admin />
              : <Redirect to={EndPoint.Login} />
          }} />
          <Route path={EndPoint.User} render={() => {
            return localStorage.getItem(ValueStored.User)
              ? <User />
              : <Redirect to={EndPoint.Login} />
          }} />
          <Route path={EndPoint.Login} render={() => {
            return localStorage.getItem(ValueStored.Admin)
              ? <Redirect to={EndPoint.Admin} />
              : localStorage.getItem(ValueStored.User)
                ? <Redirect to={EndPoint.Home} />
                : <Login />
          }} />
          {/* <Route path="*" render={() => {
            return <Redirect to="/" />
          }} /> */}
        </ThemeContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;