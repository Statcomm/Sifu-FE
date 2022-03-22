// import red from "../assets/red.png";
import { observer } from "mobx-react";
import React, { useState } from "react";
import authstore from "../../stores/authStore";
import { Modal, Form } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";

const UserForm = ({ userType }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    userType: userType,
  });
  console.log(
    "🚀 ~ file: UserForm.js ~ line 9 ~ UserForm ~ userType",
    userType
  );

  const handleChange = (event) => {
    console.log(
      "🚀 ~ file: UserForm.js ~ line 20 ~ handleChange ~ event",
      event
    );
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.value === "signUp"
      ? authstore.signUp(user)
      : authstore.logIn(user);
  };
  const signout = () => {
    authstore.signOut(user);
  };
  return (
    <div>
      <h3>
        {authstore.user && (
          <button onClick={signout} className="button">
            Sign Out
          </button>
        )}
      </h3>
      {/* <Modal.Header>
          <Modal.Title className="user">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> */}
      <BsPersonCircle />{" "}
      {userType == "sifu" ? "Become a Sifu" : "Become a Student"}
      <Form onSubmit={handleSubmit}>
        {/* <Form.Label className="text"></Form.Label> */}
        <Form.Control
          className="box"
          name="firstName"
          value={user.firstName}
          type="text"
          onChange={handleChange}
          placeholder="First Name"
        />
        <div>
          <Form.Control
            className="box"
            name="lastName"
            value={user.lastName}
            type="text"
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
        <div>
          <Form.Control
            className="box"
            name="username"
            value={user.username}
            type="text"
            onChange={handleChange}
            placeholder="User Name"
          />
        </div>
        <div>
          <Form.Control
            className="box"
            name="phoneNumber"
            value={user.phoneNumber}
            type="Number"
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>
        <div>
          <Form.Control
            className="box"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div>
          <Form.Control
            className="box"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <Modal.Footer>
          <div className="btn">
            <button value="login" onClick={handleSubmit} className="button">
              Sign In
            </button>
            <button value="signUp" onClick={handleSubmit} className="button">
              Sign Up
            </button>
          </div>
        </Modal.Footer>
      </Form>
    </div>
  );
};

export default observer(UserForm);
