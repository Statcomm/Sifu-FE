import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./Profile.css";
import V from "../../Video/V.mp4";
import Rating from "@mui/material/Rating";

function Profile() {
  return (
    <>
      <div className="p">
        <div className="p-left">
          <div className="p-left-wrapper">
            <video className="p-video" controls>
              <source src={V} type="video/mp4" />
            </video>
            <h2 className="p-intro">Zainab AlSairafi</h2>
            <h1 className="p-name">@Zee</h1>
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
