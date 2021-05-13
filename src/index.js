import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import './styles/common.css';
import './styles/common.styl';

ReactDOM.render(
<Router>
            <App />
        </Router>,
        document.getElementById("root"));