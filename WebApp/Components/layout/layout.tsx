import React from "react";
import { Link, Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home } from "../home/home";
import { Book } from "../book/book";
import { Team } from "../team/team";
import { Contact } from "../contact/contact";

const history = createBrowserHistory();

export const Layout = () => (
  <div className="hv-layout">
    <Router history={history}>
      <header>
        <div className="hv-logo-container">
          <img src="/assets/logo.svg" />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/book">Book</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>

    <footer>
      <section className="hv-social-links">
        <img src="/assets/twitter.svg" />
        <img src="/assets/facebook.svg" />
        <img src="/assets/people.svg" />
      </section>
      <section className="hv-copy">Copyright 2019</section>
    </footer>
  </div>
);
