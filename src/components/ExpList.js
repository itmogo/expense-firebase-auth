import React from 'react';
import ExpItem from './ExpItem';
import { connect } from 'react-redux';
//this component displays all the users we have in our users state from App.js
function ExpList(props) {
  return (
    <div>
      {/* we loop through all the users and for every user,
         we display a UserItem component. We also pass the user as a prop
         to UserItem so that we can display it */}
      {props.users.map((user) => (
        <ExpItem user={user} 

        
        
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps, {})(ExpList);
