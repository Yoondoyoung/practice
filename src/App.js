import React from "react";
import { Contents, NavBar } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <NavBar />
        </header>
        <Contents />

      </div>
    </Router>
  );
}
