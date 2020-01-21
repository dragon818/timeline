import React from 'react';
import './App.css';
import Form from './Form.js'
import Content from './Content.js'
import Users from './Users.js'


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      users : [
        // {
        //   username : 'draogn',
        //   userImage : ''
        // },
        // {
        //   username : 'rrrr',
        //   userImage : ''
        // }
      ],

      message : [

        // { 
        //   username : 'Jess',
        //   time: '11:00',
        //   content : 'friends'
        // },
        // { 
        //   username : 'dragon',
        //   time: '12:00',
        //   content : 'war'
        // },

      ],
    }
  }

  createMessage = (username, time, content) => {
    const newMessage = {
      username : username,
      time: time,
      content: content
    };

    this.setState(
      {
        message : [newMessage, ...this.state.message]
      }
    )
    
  }

  createUser = (newUser) => {
    this.setState(
      {
        users : [newUser, ...this.state.users,]
      }
    )

  }

  getUserName = (event) => {
    
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);

    this.setState(
      {
        [name] : value
      }
    )
  }


  render () {
    return (
      <div className = "container">

        <select className = "userSelect" name = 'name'  value = {this.state.users.username} onChange = {this.getUserName}>
          <option value="">-- Time Line --</option>
          {this.state.users.map((user, index)=> <option key = {index}>{user.username}</option>)}   
        </select>

        <Users createUser = {this.createUser}/>

        <Content selectedUser = {this.state.name} users = {this.state.users}  message = {this.state.message}/>
        <Form users = {this.state.users} createMessage = {this.createMessage} />
      </div>
    )
  }


}
export default App;
