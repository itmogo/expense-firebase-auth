import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import EditExpForm from "./EditExpForm";
import { connect } from "react-redux";
import { deleteUserAction } from "../actions/userActions";
import "./form.css";

//this component represents a single user that's displayed in the
//userlist component
function ExpItem(props) {
  const [isModalVisible, setShowModal] = useState(false);

  function showModal() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }
  //we accept the user a prop and display the user's information
  return (
    <div className="container contShadow">
    <div className="row item_down">
      <div>
      <i class="fas fa-bars"></i>
        <b>Item or Service</b>
        <br />
        <div>{props.user.noteTitle}</div>
      </div>
      <br />
      <div>
      <i class="far fa-calendar-alt"></i>
        <b>Date Purchased</b>
        <br />
        <div>{props.user.noteDate}</div>
      </div>
      <br />
      <div>
      <i class="fab fa-gg-circle"></i>
        <b>Amount Paid-GH¢</b>
        <br />
        <div>{props.user.noteText}</div>
      </div>
      <br />
      <div>
        <p>
          <b>Expenses</b>
          <div className="down">
            <Button
              variant="success  btn btn-sm"
              className="editbtn action d-grid gap-2 col-3 mx-auto"
              onClick={showModal}
            >
              Update
            </Button>
            {/* We setup edit user modal */}

            <Modal show={isModalVisible} onHide={hideModal}>
              <Modal.Header closeButton>
                <Modal.Title>Expense Update </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditExpForm user={props.user} hideModal={hideModal} />
              </Modal.Body>
            </Modal>
            <Button
              variant="danger btn-sm "
              className="action d-grid gap-2 col-3 mx-auto"
              onClick={() => {
                props.deleteUserAction(props.user.id);
              }}
            >
              Delete
            </Button>
          </div>
        </p>
      </div>
    </div>
    </div>
  );
}

let mapDispatchToProps = {
  deleteUserAction,
};

let mapStateToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(ExpItem);
