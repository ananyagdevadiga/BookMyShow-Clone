import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

export default class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      searchQuery: "",
    };
  }

  handleSidebarToggle = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  handleSearch = (event) => {
    event.preventDefault();
    console.log("Search for:", this.state.searchQuery);
  };

  render() {
    return (
      <>
        {/* Main Navbar */}
        <Navbar bg="white" expand="lg" className="shadow py-2">
          <Container fluid>
            {/* Logo */}
            <Navbar.Brand href="#home" className="ms-5 d-flex align-items-center">
              <img src="/bms-logo.png" alt="BookMyShow Logo" height="35" style={{ marginLeft: "120px" }} />
            </Navbar.Brand>

            {/* Search Bar */}
            <Form className="d-flex mx-3 flex-grow-1" onSubmit={this.handleSearch} style={{ marginLeft: "50px" }}>
              <FormControl
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="me-2 rounded-3"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                style={{ width: "65%" }}
              />
            </Form>

            {/* Right Side Buttons */}
            <Nav className="ms-auto d-flex align-items-center" style={{ marginRight: "130px", gap: "20px" }}>
              <NavDropdown title="Karkala" id="location-dropdown" className="me-2">
                <NavDropdown.Item href="#mumbai">Mumbai</NavDropdown.Item>
                <NavDropdown.Item href="#bangalore">Bangalore</NavDropdown.Item>
                <NavDropdown.Item href="#delhi">Delhi</NavDropdown.Item>
              </NavDropdown>

              <Button variant="danger" className="px-3 py-1">Sign In</Button>

              {/* Sidebar Toggle Button */}
              <Button
                variant="white"
                className="p-0 border-0"
                onClick={this.handleSidebarToggle}
                style={{ outline: "none", boxShadow: "none" }}
              >
                <FaBars size={24} />
              </Button>
            </Nav>
          </Container>
        </Navbar>

        {/* Second Navbar Below Main Navbar */}
        <Navbar bg="light" expand="lg" className="shadow-sm py-2 second-navbar">
          <Container fluid className="d-flex justify-content-center">
            <Nav className="d-flex gap-4">
              <div class="sub-nav1">
              <Nav.Link href="#movies" className="fw-bold text-dark">Movies</Nav.Link>
              <Nav.Link href="#stream" className="fw-bold text-dark">Stream</Nav.Link>
              <Nav.Link href="#events" className="fw-bold text-dark">Events</Nav.Link>
              <Nav.Link href="#plays" className="fw-bold text-dark">Plays</Nav.Link>
              <Nav.Link href="#sports" className="fw-bold text-dark">Sports</Nav.Link>
              <Nav.Link href="#activities" className="fw-bold text-dark">Activities</Nav.Link>
              </div>
              <div className="sub-nav2">
              <Nav.Link href="#offers" className="fw-bold text-danger">ListYourShow</Nav.Link>
              <Nav.Link href="#offers" className="fw-bold text-danger">Corporates</Nav.Link>
              <Nav.Link href="#offers" className="fw-bold text-danger">Offers</Nav.Link>
              <Nav.Link href="#offers" className="fw-bold text-danger">Gift Cards</Nav.Link>
              </div> 
            </Nav>
          </Container>
        </Navbar>

        {/* Sidebar */}
        <div className={`custom-sidebar ${this.state.showSidebar ? "open" : ""}`}>
          <div className="sidebar-header">
            <strong>Hey!</strong>
            <Button variant="white" className="close-btn" onClick={this.handleSidebarToggle}>
              ✖
            </Button>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-login">
              <img src="/rewards_login.avif" alt="User" className="profile-img" />
              <span className="sidebar-text">Unlock special offers & great benefits</span>
              <Button variant="danger" className="login-btn">Login / Register</Button>
            </div>

            <Nav className="flex-column">
              <Nav.Link href="#notifications">🔔 Notifications</Nav.Link>
              <Nav.Link href="#orders">📦 Your Orders</Nav.Link>
              <Nav.Link href="#stream">🎥 Stream Library</Nav.Link>
              <Nav.Link href="#credit-card">💳 Play Credit Card</Nav.Link>
              <Nav.Link href="#help">🛠 Help & Support</Nav.Link>
              <Nav.Link href="#settings">⚙️ Accounts & Settings</Nav.Link>
              <Nav.Link href="#rewards">🎁 Rewards</Nav.Link>
              <Nav.Link href="#bookchange">🔄 BookAChange</Nav.Link>
            </Nav>
          </div>
        </div>

        {/* Custom CSS */}
        <style>{`
          .custom-sidebar {
            position: fixed;
            top: 0;
            right: -25vw;
            width: 30vw;
            max-width: 380px;
            height: 100vh;
            background: white;
            box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.2);
            border-left: 1px solid #ddd;
            transition: right 0.3s ease-in-out;
          }

          .custom-sidebar.open {
            right: 0;
          }

          .sidebar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            font-size: 18px;
            font-weight: bold;
            border-bottom: 1px solid #ddd;
          }

          .close-btn {
            font-size: 20px;
            cursor: pointer;
          }

          .sidebar-content {
            padding: 7px 20px 20px 20px;
            text-align: left;
          }

          .sidebar-login {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 10px;
            border-bottom: 1px solid #ddd;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          }

          .profile-img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 1px solid #ccc;
          }

          .sidebar-text {
            font-size: 14px;
            color: #555;
            flex-grow: 1;
          }

          .login-btn {
            font-size: 13px;
            padding: 5px 10px;
            white-space: nowrap;
          }
          .sub-nav1{
          display:flex;
          }
          .sub-nav2{
          display:flex;
          padding-left:590px;
          font-size:12px;
          
          }
        `}</style>
      </>
    );
  }
}
