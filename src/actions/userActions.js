export const addUserAction =(user) => {
    return (dispatch, state, {getFirestore})=>{
      getFirestore()
      .collection("users")
      .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
      .then((doc)=>{});
    }
  }
  
  export function deleteUserAction(id) {
    return {
      type: 'DELETE_USER',
      payload: id,
    };
  }
  
  export function updateUserAction(id, updatedUser) {
    return {
      type: 'UPDATE_USER',
      payload: { id: id, updatedUserInfo: updatedUser },
    };
  };

  // get data from firebase db and display on UI
  // create component didmount on apps
  //import get all user in apps
  //create mapstate and mapdispatch in app js
  //create a case on reducers
  // delete dispatch in add component

  export const getAllUsers =() => {
    return (dispatch, state, {getFirestore})=>{
      getFirestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        let users = [];
        snapshot.forEach((doc)=>{
          users.push(doc.data());
        });
        console.log(users);
        dispatch({
          type: 'SET_ALL_USERS',
          payload: users,
        });
      },
      (err)=>{}
      );
    };
  };
  