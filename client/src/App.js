import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import MealList from './components/MealList';
import Meal from './components/Meal';
import SignUp from './components/SignUp';
import NewMeal from './components/NewMeal';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = '/' component={Home} />
          <Route exact path="/user/:userId/" component={MealList} />
          <Route exact path="/user/:userId/meal/:mealId" component={Meal} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/user/:userId/newMeal" component={NewMeal} />
        </div>  
      </Router>
    );
  }
}

export default App;
