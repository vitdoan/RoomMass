import React, { Component } from "react";
import { useState } from "react";
import {
	Button,
	Form,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalHeader,
	ModalBody,
} from "reactstrap";
import "./Nav.css";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
			username: "",
			password: "",
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogIn = this.handleLogIn.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	handleLogIn(event) {
		this.toggleModal();
		alert(
			"Username: " +
				this.name.value +
				"Password: " +
				this.type.value +
				" Remember: " +
				this.remember.checked
		);
		event.preventDefault();
	}
	render() {
		return (
			<>
				<nav
					className="navbar fixed-top justify-content-end"
					style={{ background: "black", color: "#E6AC2C" }}
				>
					<li className="nav-item">
						<a
							className="nav-link active"
							aria-current="page"
							href="#"
						>
							Home
						</a>
					</li>

					<li className="nav-item">
						<a
							className="nav-link active"
							aria-current="page"
							href="#about"
						>
							About
						</a>
					</li>
          <li className="nav-item">
						<a
              id = "con_us"
							className="nav-link active"
							aria-current="page"
							onClick={() => this.props.changeRoute(6)}
						>
							Contact Us
						</a>
					</li>
					<li className="nav-item">
						<button
							type="button"
							className="btn btn-warning"
							onClick={() => this.props.changeRoute(1)}
						>
							Log In
						</button>
					</li>
					<li className="nav-item">
						<a
							className="nav-link active"
              aria-current="page"
							onClick={() => this.props.changeRoute(2)}
						>
							Sign Up
						</a>
					</li>
				</nav>
			
			</>
		);
	}
}

export default Header;
