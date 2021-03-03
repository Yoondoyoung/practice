import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import "./Contents.css";
import { 
  Home,
  Profile
} from '../';

class Contents extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Profile' component={Profile}/>
        </Switch>
      </div>
    );
  }
}

export default Contents;