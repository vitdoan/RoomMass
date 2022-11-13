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
import RenderPost from "./RenderPost";

export default function FindRoomate() {
  let user_object1 = {
    username: "a",
    gender: "Male", //male or female
    school_year: "Freshman", //Freshman/Sophomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS311", "CS377"],
    hobby: [], //not know yet
    extra_note: "Some text",
    area: "Central",
  };

  let user_object2 = {
    username: "b",
    gender: "Male", //male or female
    school_year: "Freshman", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS311", "CS377"],
    hobby: [], //not know yet
    extra_note: "Some text",
    area: "Southwest",
  };

  let user_object3 = {
    username: "c",
    gender: "Female", //male or female
    school_year: "Freshman", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS311", "CS377"],
    hobby: [], //not know yet
    extra_note: "Some text",
    area: "Sylvan",
  };

  let user_object4 = {
    username: "c",
    gender: "Male", //male or female
    school_year: "Freshman", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS311", "CS377"],
    hobby: [], //not know yet
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

  const handleFilterGender = (event) => {
    const value = event.target.value;
    if (value !== "Gender") {
      setIsFilter(true);
      filter_func("gender", value);
    } else {
      setIsFilter(false);
    }
  };

  const handleFilterArea = (event) => {
    const value = event.target.value;
    if (value !== "Area") {
      filter_func("area", value);
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
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
    <div>
      <button onClick={toggleModal}>Add</button>
      <select name="gender" id="gender" onChange={handleFilterGender}>
        <option value="Gender">Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
      <select name="area" id="area" onChange={handleFilterArea}>
        <option value="Area">Area</option>
        <option value="North">North</option>
        <option value="Northeast">Northeast</option>
        <option value="Southwest">Southwest</option>
        <option value="Central">Central</option>
        <option value="CHC">CHC</option>
        <option value="OHill">OHill</option>
        <option value="Sylvan">Sylvan</option>
      </select>
      <div>
        {isFilter
          ? filter.reverse().map((post) => <RenderPost post={post} />)
          : posts.reverse().map((post) => <RenderPost post={post} />)}
      </div>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add A Post</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="username">Gender</Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select</option>
                <option value="1">Female</option>
                <option value="2">Male</option>
                <option value="3">Bede</option>
              </select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">School Year</Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Working Time: </Label>
              <div>
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  ></input>
                  <label class="form-check-label" for="inlineRadio1">
                    Late Owl
                  </label>
                </div>
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  ></input>
                  <label class="form-check-label" for="inlineRadio2">
                    Early Bird
                  </label>
                </div>
              </div>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Area</Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select</option>
                <option value="North">North</option>
                <option value="Northeast">Northeast</option>
                <option value="Central">Central</option>
                <option value="Southwest">Southwest</option>
                <option value="Orchard Hill">Orchard Hill</option>
                <option value="CHC">CHC</option>
              </select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Hall</Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select</option>
                <option value="Freshman">Sylvan</option>
                <option value="Sophomore">Leach</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Extra Notes</Label>
              <div class="mb-3">
                
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </FormGroup>

            <Button type="submit" value="submit" color="success">
             Add
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
