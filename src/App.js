import React from "react";
import { Contents, NavBar } from './components';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Route>
        <header>
          <NavBar />
        </header>
        <Contents />
      </Route>
    </Router>
  );
}
