import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import MyFooter from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div>
       <Navbar variant="dark">
    <Navbar.Brand href="/">Anita Danyshchuk</Navbar.Brand>
    <Nav className="ml-auto">
  
      <Nav.Link as={Link} to="/">About</Nav.Link>
      <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
    </Navbar>
      
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
    
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <About/>
          </Route>
        </Switch>
      </div>
      <MyFooter/>
    </Router>
  );
}

export default App;
