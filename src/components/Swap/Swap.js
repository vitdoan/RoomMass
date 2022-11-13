import React, { useState } from "react";
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
import SwapPost from "./SwapPost";

export default function Swap() {
  let user_object1 = {
    username: "a",
    gender: "Male", //male or female
    school_year: "Freshman", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS311", "CS377"],
    hobby: "Some hobbies", //not know yet
    extra_note: "Some text",
    area: "Central",
  };

  let user_object2 = {
    username: "b",
    gender: "Male", //male or female
    school_year: "Freshman", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS311", "CS377"],
    hobby: "Some hobbies", //not know yet
    extra_note: "Some text",
    area: "Southwest",
  };

  let user_object3 = {
    username: "c",
    gender: "Female", //male or female
    school_year: "Freshman", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS311", "CS377"],
    hobby: "Some hobbies", //not know yet
    extra_note: "Some text",
    area: "Sylvan",
  };

  let user_object4 = {
    username: "c",
    gender: "Male", //male or female
    school_year: "Freshman", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS311", "CS377"],
    hobby: "Some hobbies", //not know yet
    extra_note: "Some text",
    area: "Sylvan",
  };

  let user_list = [user_object1, user_object2, user_object3, user_object4];
  let [posts, setPosts] = useState(user_list);
  let [filter, setFilter] = useState("");
  let [isFilter, setIsFilter] = useState(false);
  let [isModalOpen, setIsModalOpen] = useState(false);

  const filter_func = (attribute, cond) => {
    setFilter(posts.filter((user) => user[attribute] === cond));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogIn = (event) => {
    toggleModal();
    alert(
      "Username: " +
        this.name.value +
        "Password: " +
        this.type.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  };

  return (
    <div className="swapRoom">
      <button onClick={toggleModal}>Add</button>
      <div>
        {posts.reverse().map((post) => <SwapPost post={post} />)}
      </div>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Log In</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                // innerRef={(input) => (this.username = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                //innerRef={(input) => (this.password = input)}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  //innerRef={(input) => (this.remember = input)}
                />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
