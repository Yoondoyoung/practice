import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import "./Contents.css";
import { 
  Home,
  Skills,
  Project,
  Contact
} from '../';

class Contents extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Skills' component={Skills}/>
          <Route exact path='/Project' component={Project}/>
          <Route exact path='/Contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default Contents;