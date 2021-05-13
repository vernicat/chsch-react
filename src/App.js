import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
  browserHistory
} from "react-router-dom";

import {
    Header,
    Footer,
    Landing,
    Page2,
    Subscribe
} from './components';

const App = () => {
  const location = useLocation()

  React.useEffect(() => {
    // console.log("pathname", location.pathname);

    let linkActiveAll = document.querySelectorAll(".header-nav-link_active");

    linkActiveAll.forEach( link => {
      let line = document.querySelector(".header-nav-link_active-line");
      link.removeChild(line);
      link.classList.remove('header-nav-link_active');
      link.classList.add('header-nav-link');
    });

    let newLinkActiveAll = document.querySelectorAll(`.header-nav-link a[href='${location.pathname}']`);
    let parentDiv, newLine;

    newLinkActiveAll.forEach( newLinkActive => {
      parentDiv = newLinkActive.parentElement;
      parentDiv.classList.remove('header-nav-link');
      parentDiv.classList.add('header-nav-link_active');
      newLine = document.createElement("div");
      newLine.classList.add('header-nav-link_active-line');
      parentDiv.prepend(newLine);
    });


  }, [location]);

  return (
      <Fragment>
            <Header />
            <main>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/course" component={Page2} />
              </Switch>
              <Subscribe />
            </main>
            <Footer />
      </Fragment>
    );
  }

  export default App;