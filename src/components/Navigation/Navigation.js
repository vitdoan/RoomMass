import React, { Component } from "react";
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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
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
        <ul className="nav nav-tabs justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
          <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.toggleModal}
          >
            Log In
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
                <Button className="mt-3" type="submit" value="submit" color="primary">
                  Log In
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
            
           
          </li>
          <li className="nav-item">
          <button
            type="button"
            className="btn"
            onClick={this.toggleModal}
          >
            Sign Up
          </button>

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Sign up</ModalHeader>
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
                <Button className="mt-3" type="submit" value="submit" color="primary">
                  Log In
                </Button>
              </Form>
            </ModalBody>
          </Modal>
          </li>
        </ul>

        <div className = " p-5  bg-secondary text-white rounded">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Swap Umass</h1>
                        <p>Having troubles finding people to swap your room? We got you!</p>
                    </div>
                </div>
            </div>
        </div>

       
      </>
    );
  }
}

export default Header;
