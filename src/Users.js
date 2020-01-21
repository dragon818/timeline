import React from 'react';
import './App.css';
 

class Users extends React.Component {
  constructor () {
    super();
    this.state = {
      username : '',
      userImage : '',
    }
  }


  createItem = (event)=> {

    const  name = event.target.name
    const  value = event.target.value
    console.log(value);

    this.setState(
      {
        [name] : value,
      }
    )
  }

  render () {
    return (
      <div className = 'createUser'>
        <h2>Create User</h2>
        <form>
          <input name = "username" type = "text" value = {this.state.username} onChange = { this.createItem }></input>
          {/* <img src = {this.state.userImage} alt = 'useriamge'/> */}
          {/* <input name = "userImage" type = "file" value = {this.state.userImage} onChange = { this.createItem }></input> */}
          <input type = "button" value = "submit" onClick = {() => this.submitForm()}></input>
        </ form>
      </div>
    )
  }

  submitForm = () => {
    this.props.createUser(this.state);
    this.setState(
      { 
        username : '',
        userImage : '',
      })
  }
}

export default Users;