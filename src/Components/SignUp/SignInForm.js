// import red from "../assets/red.png";
import { observer } from "mobx-react";
import React, { useState } from "react";
import authstore from "../../stores/authStore";
import { Modal, Form } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";

const SignInForm = ({ userType }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

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
      <BsPersonCircle /> User
      <Form onSubmit={handleSubmit}>
        {/* <Form.Label className="text"></Form.Label> */}

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
          </div>
        </Modal.Footer>
      </Form>
    </div>
  );
};

export default observer(SignInForm);
