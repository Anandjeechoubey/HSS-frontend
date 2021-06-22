import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "pages/about";
import Academics from "pages/academics";
import Events from "pages/events";
import Facilities from "pages/facilities";
import People from "pages/people";
import Research from "pages/research";
import Home from "pages/home";
import Workshops from "pages/workshops";
import NavBar from "components/navbar";
import Footer from "components/footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/academics" component={Academics} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/facilities" component={Facilities} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/workshops" component={Workshops} />
        <Route exact path="/people" component={People} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
