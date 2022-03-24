import React from "react";
import { Button, Modal } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import "./ReviewModal.css";

const ReviewModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Review me</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea className="modalInput" type="textarea"></textarea>
        <div>
          <Rating
            size="large"
            name="half-rating"
            defaultValue={0}
            precision={0.5}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="btn">
          <Button onClick={props.onHide}>Submit</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewModal;
