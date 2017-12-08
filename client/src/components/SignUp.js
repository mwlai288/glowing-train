import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    user: [],
    redirect: false
  }

  handleChange = e => {
    const attributeName = e.target.name;
    const attributeValue = e.target.value;
    const newState = { ...this.state };
    newState[attributeName] = attributeValue;
    this.setState(newState);
  };

  addNewUser = e => {
    e.preventDefault();
    axios.post("/api/user/signUp", this.state).then(res => {
      this.setState({
          userId: res.data._id,
          redirect: true
        });
    }).catch(err => console.log(err));
  };

  render() {
    if (this.state.redirect){
      return <Redirect to={`/user/${this.state.userId}`} />
  } else {
    return(
      <div>
        <form onSubmit={this.addNewUser}>
        <div>
          <input name="userName" type="text" placeholder="User Name" onChange={this.handleChange} />
        </div> 
        <div>
          <input name="password" type="text" placeholder="Password" onChange={this.handleChange} />
        </div>
          <input type="submit"/>
        </form>
      </div>
    )
  }
 }
}
export default SignUp;