import React from 'react';
import './App.css';
import userimage from './2.png'


class Content extends React.Component {

  render () {
      console.log(this.props.selectedUser);
    if (!this.props.selectedUser) {
      
      const newMessage = this.props.message.map((mes, index) => {
        return (
          <div key = {index} className = 'messages'>
            <img src={userimage} alt = "userImage" className = "userimage"/>
            <span>{mes.username}:</ span>
            <span>{mes.content}</ span>
            <p>{mes.time}</p>
          </div>  
        )
      })
      
      return (
        <div>{newMessage}</div>
      )

    } else {

      const filterMessages = this.props.message.filter(mes =>  mes.username === this.props.selectedUser);
      const newMessage = filterMessages.map((mes, index) => {
        return (
          <div key = {index} className = 'messages'>
            <img src={userimage} alt = "userImage" className = "userimage"/>
            <span>{mes.username}:</ span>
            <span>{mes.content}</ span>
            <p>{mes.time}</p>
          </div>  
        )
      })
      return (
        <div>{newMessage}</div>
      )
    }
  }
}

export default Content;
