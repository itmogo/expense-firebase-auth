import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUserAction } from "../actions/userActions";
import { Button, Form } from "react-bootstrap";

//user sign up component
function EditExpForm(props) {
  // default user state is an object with empty string as value
  const [state, setState] = useState({
    noteTitle: props.user.noteTitle,
    noteService: props.user.noteService,
    noteDate: props.user.noteDate,
    noteText: props.user.noteText,
  });

  //a function that get called anytime an input field changes
  function handleOnChange(event) {
    //event.target.name hold the name of the input that changed
    //event.target.value hold the new value of the input field that changed

    //we update the user state with the new value
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  //this function will be called the the create user button is clicked on
  function handleSubmit() {
    //we call addUser function passed to this user form component
    //as a prop from the App component

    let user = { ...state, id: props.user.id };
    props.updateUserAction(props.user.id, user);
    props.hideModal();
  }

  return (
    <div>
      <form className="editForm">
        <div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
            <i class="fas fa-bars "></i>
            Category </Form.Label>
            <select            
            class="form-select"
            type="text"
            value={state.noteTitle}
            name="noteTitle"
            aria-label="Default select example"            
            onChange={handleOnChange}            >
            <option selected>Please select your category</option>
            <option value={state.food}>Food and Drink</option>
            <option value={state.accomodation}>Accomodation</option>
            <option value={state.transport}>Transportation</option>
            <option value={state.house}>Housing and Rent</option>
            <option value={state.misc}>Miscellaneous</option>
          </select>

          </Form.Group>
        </div>
        <br />

        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <i class="fas fa-list"></i>
            <b>item / Service</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your item or service"
            name="noteService"
            value={state.noteService}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            required
          />
        </Form.Group>

        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
          <i class="far fa-calendar-alt"></i>
          Date Purchased</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date of purchase"
            name="noteDate"
            value={state.noteDate}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            required
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>
          <i class="fab fa-gg-circle"></i>
          Amount Paid - GH</Form.Label><br/>
          <Form.Control
            type="number"
            name="noteText"
            value={state.noteText}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            placeholder="Enter amount paid"
            required
             />
        </Form.Group>
        <br />
          <div>
          {/* the create user button call the handleSubmit functon when clicked */}
          <Button type="button" variant="primary" onClick={handleSubmit}>
            Update Expense 
          </Button>
        </div>
      </form>
    </div>
  );
}

let mapDispatchToProps = {
  updateUserAction,
};

let mapStateToProps = () => {};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpForm);
