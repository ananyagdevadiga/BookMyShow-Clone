import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
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
            <Navbar.Brand href="#home" className="ms-5 d-flex align-items-center">
              <img src="/bms-logo.png" alt="BookMyShow Logo" height="35" style={{ marginLeft: "120px" }} />
            </Navbar.Brand>

            <Form
              className="d-flex mx-3 flex-grow-1"
              onSubmit={this.handleSearch}
              style={{ marginLeft: "50px" }}
            >
              <FormControl
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="me-2 rounded-3"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                style={{ width: "65%" }}
              />
            </Form>

            <Nav className="ms-auto d-flex align-items-center" style={{ marginRight: "130px", gap: "20px" }}>
              <NavDropdown title="Karkala" id="location-dropdown" className="me-2">
                <NavDropdown.Item href="#mumbai">Mumbai</NavDropdown.Item>
                <NavDropdown.Item href="#bangalore">Bangalore</NavDropdown.Item>
                <NavDropdown.Item href="#delhi">Delhi</NavDropdown.Item>
              </NavDropdown>

              <Button variant="danger" className="px-3 py-1">Sign In</Button>

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

        {/* Second Navbar */}
        <Navbar bg="light" expand="lg" className="shadow-sm py-2 second-navbar">
          <Container fluid className="d-flex justify-content-center">
            <Nav className="d-flex gap-4">
              <div className="sub-nav1">
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
            <Button variant="white" className="close-btn" onClick={this.handleSidebarToggle}>✖</Button>
          </div>

          {/* Login offer */}
          <div className="sidebar-login-box">
            <img src="/rewards_login.avif" alt="Gift" className="sidebar-login-img" />
            <div className="sidebar-login-text">
              <p className="sidebar-offer-text">Unlock special offers & great benefits</p>
            </div>
            <Button className="sidebar-login-btn" variant="outline-danger">Login / Register</Button>
          </div>

          {/* Sidebar Links */}
          <div className="sidebar-links">
            {this.renderSidebarItem("🔔", "Notifications")}
            {this.renderSidebarItem("📦", "Your Orders", "View all your bookings & purchases", true)}
            {this.renderSidebarItem("🎥", "Stream Library", "Rented & Purchased Movies", true)}
            {this.renderSidebarItem("💳", "Play Credit Card", "View your Play Credit Card details and offers")}
            {this.renderSidebarItem("💬", "Help & Support", "View commonly asked queries and Chat")}
            {this.renderSidebarItem("⚙️", "Accounts & Settings", "Location, Payments, Permissions & More", true)}
            {this.renderSidebarItem("🎁", "Rewards", "View your rewards & unlock new ones")}
            {this.renderSidebarItem("🔄", "BookAChange")}
          </div>
        </div>

        {this.state.showSidebar && (
          <div className="sidebar-overlay" onClick={this.handleSidebarToggle}></div>
        )}

        {/* Sidebar Styles */}
        <style>{`
          .custom-sidebar {
            position: fixed;
            top: 0;
            right: -30vw;
            width: 30vw;
            max-width: 380px;
            height: 100vh;
            background: white;
            border-left: 1px solid #ddd;
            transition: right 0.3s ease-in-out;
            z-index: 1050;
          }
          .custom-sidebar.open {
            right: 0;
          }
          .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1040;
          }
          .sidebar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            font-size: 18px;
            font-weight: bold;
            border-bottom: 1px solid #ddd;
          }
          .close-btn {
            font-size: 20px;
            cursor: pointer;
            border: none;
          }
          .sidebar-login-box {
            display: flex;
            align-items: center;
            padding: 10px 20px;
            gap: 10px;
            border-bottom: 1px solid #ddd;
          }
          .sidebar-login-img {
            width: 40px;
            height: 40px;
          }
          .sidebar-login-text {
            flex-grow: 1;
            text-align: left;
          }
          .sidebar-offer-text {
            font-size: 14px;
            color: #337ab7;
            margin: 0;
          }
          .sidebar-login-btn {
            font-size: 13px;
            white-space: nowrap;
            border-radius:10px;
          }
          .sidebar-links {
            padding: 10px 0;
          }
          .sidebar-link-item {
            padding: 10px 20px;
            border-bottom: 1px solid #eee;
            text-align: left;
          }
          .sidebar-link-title {
            font-weight: 500;
            font-size: 15px;
          }
          .sidebar-link-subtitle {
            font-size: 12px;
            color: #888;
            margin-top: 2px;
          }
          .disabled {
            opacity: 0.5;
            pointer-events: none;
          }
          .sub-nav1 {
            display: flex;
          }
          .sub-nav2 {
            display: flex;
            padding-left: 590px;
            font-size: 12px;
          }
        `}</style>
      </>
    );
  }

  renderSidebarItem(icon, title, subtitle = "", disabled = false) {
    return (
      <div className={`sidebar-link-item ${disabled ? "disabled" : ""}`}>
        <div className="sidebar-link-title">{icon} {title}</div>
        {subtitle && <div className="sidebar-link-subtitle">{subtitle}</div>}
      </div>
    );
  }
}
