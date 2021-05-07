import React, { Fragment } from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";

import {
    Landing,
    Page2
  } from './components';

function App() {
    return (
        <div className="App">
          {/* <HeaderBlock/> */}
         <Fragment>
          <div className="container">
            <div className="content">
                  <Router>
                      <Switch>
                        <Route
                          path="/"
                          exact
                          component={() => (
                            <Landing />
                          )}
                        />
                        <Route
                          path="/page2"
                          exact
                          component={() => (
                            <Page2 />
                          )}
                        />
                      </Switch>
                  </Router>
              </div>
          </div>
         </Fragment>
         {/* <Footer /> */}
        </div>
      );
    }
    
    export default App;