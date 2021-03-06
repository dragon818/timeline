import React from 'react';
import './App.css';

class Form extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username : '',
      time : '',
      content : '',
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
      <form className = 'form' >
        <select name = "username" value = {this.state.username} onChange = { this.createItem }>
          <option value="">-- users --</option>
          {this.props.users.map((user, index)=> <option key = {index}>{user.username}</option>)}   
        </select>
        <input name = "content" type = "text" value = {this.state.content} onChange = { this.createItem }></input>
        <input type = "button" value = "submit" onClick = {() => this.submitForm()}></input>
      </ form>
    )
  }

  submitForm = () => {
    const timetamplet = new Date();

    const tt = timetamplet.toLocaleDateString() + '---' + timetamplet.toLocaleTimeString();

    this.props.createMessage(this.state.username, tt, this.state.content);

    // init the message
    this.setState(
      { 
        username : '',
        time : '',
        content : '',
      }
      )
  }
}
export default Form;

