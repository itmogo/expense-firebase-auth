//import logo from './logo.svg';
import "./App.css";
import ExpForm from "./components/ExpForm";
import ExpList from "./components/ExpList";
import "./components/form.css";
import React, { Component } from "react";
import { getAllUsers } from "./actions/userActions";
import { connect } from "react-redux";

export class App extends Component {
  // create component did mount to
  // help display data on UI
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url("background.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container contapp">
          <div>
            <i>
              <h5> Aunty Maggie's Expense Tracker Application</h5>
            </i>
            <div className="row">
              <div className="col-md-5">
                <h6>Daily Expense</h6>
                <ExpForm />
              </div>

              <div className="col-md-7">
                <h6>Expense Records</h6>
                <ExpList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps =(state)=>({
  users: state.users,  
});

 const mapDispatchToProps ={
  getAllUsers,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
