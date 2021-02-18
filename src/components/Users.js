import React, { Component } from 'react';
import { connect } from 'react-redux';

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li key={user.username}>{user.username}</li>)}<br/>
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }

  // componentDidMount(){
  //   userCount()
  // }

}


export default connect(
  mapStateToProps
)(Users);

function mapStateToProps(state){
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}


//add mapStateToProps here

// connect this component to Redux
// export default Users