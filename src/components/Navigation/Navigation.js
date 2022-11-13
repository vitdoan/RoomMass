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
					style={{ background: "#8A8887" }}
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
							href="#"
						>
							About
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
						<button
							type="button"
							className="btn"
							onClick={() => this.props.changeRoute(2)}
						>
							Sign Up
						</button>
					</li>
				</nav>
				{/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Log In</ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.handleLogIn}>
                    <FormGroup>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        innerRef={(input) => (this.username = input)}
                        //onChange = {e => this.state.username = e.target.value}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        type="text"
                        id="password"
                        name="password"
                        innerRef={(input) => (this.password= input)}
                        //onChange = {e => this.state.password = e.target.value}
                      />
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="remember"
                          innerRef={(input) => (this.remember = input)}
                        />
                        Remember me
                      </Label>
                    </FormGroup>
                    <Button
                      className="mt-3"
                      type="submit"
                      value="submit"
                      color="primary"
                    >
                      Log In
                    </Button>
                  </Form>
                </ModalBody>
              </Modal>
            </div>
          </li> */}

				{/* <li className="nav-item">
            <button type="button" className="btn" onClick={this.toggleModal}>
              Sign Up
            </button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Log In</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleLogIn}>
                  <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      innerRef={(input) => (this.name = input)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="text"
                      id="password"
                      name="password"
                      innerRef={(input) => (this.type = input)}
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="remember"
                        innerRef={(input) => (this.remember = input)}
                      />
                      Remember me
                    </Label>
                  </FormGroup>
                  <Button
                    className="mt-3"
                    type="submit"
                    value="submit"
                    color="primary"
                  >
                    Log In
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          </li> */}
			</>
		);
	}
}

// const nav = () => {
//     const [activeNav, setActiveNav] = useState('#')
//     return (
//         <nav>
//             <a href = "#" onClick = {() => setActiveNav('#')} className = {activeNav === '#' ? 'active': ''}><ImHome color = "#1B9FA8"/></a>
//             <a href = "#about" onClick = {() => setActiveNav('#about')}  className = {activeNav === '#about' ? 'active' : ''}><FaUser/></a>

//         </nav>
//     )
// }

export default Header;
