import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import "./Profile.css";
import V from "../../Video/V.mp4";
import Rating from "@mui/material/Rating";
import ReviewModal from "../ReviewModal/ReviewModal";

function Profile() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="p">
        <div className="p-left">
          <div className="p-left-wrapper">
            <video className="p-video" controls>
              <source src={V} type="video/mp4" />
            </video>
            <h2 className="p-intro">Zainab AlSairafi</h2>
            <h1 className="p-name">
              @Zee
              <div className="p-colz">
                <div className="p-cloz-icon">
                  <a href="http://api.whatsapp.com/send?phone=94433808">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                  <a href="https://www.instagram.com/f.alsaleh94/?hl=en">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/FAlSaleh94">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </h1>
            <div className="p-title">
              <div className="p-title-wrapper">
                <div className="p-title-item">Crochet</div>
                <div className="p-title-item">Scuba Diving</div>
                <div className="p-title-item">KickBoxing</div>
                <div className="p-title-item">Writer</div>
                <div className="p-title-item">Content Creator</div>
              </div>
            </div>
            <p className="p-desc">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <div>
              <Card style={{ width: "15rem" }}>
                <Card.Body>
                  <Card.Title>Dave D Dave</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="p-review-btn">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Write a review
              </Button>
              <ReviewModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>

        <div className="p-right">
          <div className="p-bg"></div>

          <img
            src="https://i.pinimg.com/originals/18/41/56/1841568051ba1980670a0065b58678d7.png"
            alt=""
            className="p-img"
          />
          <div className="p-accordian">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Proficiencies</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Languages </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
