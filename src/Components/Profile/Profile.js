import "./Profile.css";
import React from "react";
import ReactPlayer from "react-player";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Accordion } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <div className="maincontainer">
        <div className="container">
          <div className="profile-page tx-13">
            <div className="row">
              <div className="col-12 grid-margin">
                <div className="profile-header">
                  <div className="cover">
                    <div className="gray-shade"></div>
                    <div className="cover-body d-flex justify-content-between align-items-center">
                      <div>
                        <img
                          className="profile-pic"
                          src="https://i.pinimg.com/originals/18/41/56/1841568051ba1980670a0065b58678d7.png"
                          alt="profile"
                        />
                        <span className="profile-name">Zee Sairafi</span>
                      </div>
                      <div className="d-none d-md-block">
                        <button className="btn btn-primary btn-icon-text btn-edit-profile">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-edit btn-icon-prepend"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                          Edit profile
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="header-links"></div>
                </div>
              </div>
            </div>
            <div className="row profile-body">
              <div className="col-md-8 col-xl-6 middle-wrapper">
                <div className="row">
                  <div className="col-md-12 grid-margin">
                    <div className="card rounded">
                      <ReactPlayer url="https://www.youtube.com/watch?v=668nUCeBHyY" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card rounded">
                      <div className="card-header">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <img
                              className="img-xs rounded-circle"
                              src="https://i.pinimg.com/originals/18/41/56/1841568051ba1980670a0065b58678d7.png"
                              alt=""
                            />
                            <div className="ml-2">
                              <p>About Me</p>
                              {/* <p className="tx-11 text-muted">5 min ago</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="mb-3 tx-14">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-none d-xl-block col-xl-3 right-wrapper">
                <div className="row">
                  <div className="col-md-12 grid-margin">
                    <div className="card rounded">
                      <div className="card-body">
                        <div className="latest-photos">
                          <div className="row">
                            <div className="">
                              <div className="dropdown">
                                <Accordion defaultActiveKey="0" flush>
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                      Proficiencies
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi
                                      ut aliquip ex ea commodo consequat. Duis
                                      aute irure dolor in reprehenderit in
                                      voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim id
                                      est laborum.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                      Accordion Item #2
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi
                                      ut aliquip ex ea commodo consequat. Duis
                                      aute irure dolor in reprehenderit in
                                      voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim id
                                      est laborum.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <figure className="mb-0">
                                <img
                                  className="img-fluid"
                                  src="https://therichpost.com/wp-content/uploads/2021/03/avatar9.png"
                                  alt=""
                                />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 grid-margin">
                    <div className="card rounded">
                      <div className="card-body">
                        <h6 className="card-title">suggestions for you</h6>
                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png"
                              alt=""
                            />
                            <div className="ml-2">
                              <p>jassa</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="8.5" cy="7" r="4"></circle>
                              <line x1="20" y1="8" x2="20" y2="14"></line>
                              <line x1="23" y1="11" x2="17" y2="11"></line>
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                              alt=""
                            />
                            <div className="ml-2">
                              <p>jassa</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="8.5" cy="7" r="4"></circle>
                              <line x1="20" y1="8" x2="20" y2="14"></line>
                              <line x1="23" y1="11" x2="17" y2="11"></line>
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://therichpost.com/wp-content/uploads/2021/03/avatar4.png"
                              alt=""
                            />
                            <div className="ml-2">
                              <p>jassa</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="8.5" cy="7" r="4"></circle>
                              <line x1="20" y1="8" x2="20" y2="14"></line>
                              <line x1="23" y1="11" x2="17" y2="11"></line>
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://therichpost.com/wp-content/uploads/2021/03/avatar5.png"
                              alt=""
                            />
                            <div className="ml-2">
                              <p>jassa</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="8.5" cy="7" r="4"></circle>
                              <line x1="20" y1="8" x2="20" y2="14"></line>
                              <line x1="23" y1="11" x2="17" y2="11"></line>
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png"
                              alt=""
                            />
                            <div className="ml-2">
                              <p>jassa</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="8.5" cy="7" r="4"></circle>
                              <line x1="20" y1="8" x2="20" y2="14"></line>
                              <line x1="23" y1="11" x2="17" y2="11"></line>
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://therichpost.com/wp-content/uploads/2021/03/avatar7.png"
                              alt=""
                            />
                            <div className="ml-2">
                              <p>jassa</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="8.5" cy="7" r="4"></circle>
                              <line x1="20" y1="8" x2="20" y2="14"></line>
                              <line x1="23" y1="11" x2="17" y2="11"></line>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
