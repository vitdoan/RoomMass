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
import Dashboard from "../Dashboard/Dashboard";
import SwapPost from "./SwapPost";

export default function Swap({changeRoute}) {
  let user_object1 = {
    username: "CarlLiu",
    gender: "Male", //male or female
    school_year: "Freshman", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS121", "GEO101", "MATH131"],
    hobby: "Soccer", //not know yet
    extra_note: "I prefer a roommate, who can play soccer.",
    area: "Central",
    reason: "N/A",
  };

  let user_object2 = {
    username: "KodyOliver23",
    gender: "Male", //male or female
    school_year: "Junior", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS311", "CS377", "CS383", "CS446"],
    hobby: "AI and Algorithms!", //not know yet
    extra_note: "I want to find a partner for my Machine Learning project.",
    area: "Southwest",
    reason: "N/A",
  };

  let user_object3 = {
    username: "Lisa33",
    gender: "Female", //male or female
    school_year: "Freshman", //Freshman/Sorphomore/junior/senior
    working_time: "Early Bird", //Late owl/Early bird
    courses: ["CS187", "CHEM111", "HIS110"],
    hobby: "Coding, studying, and listening to music", //not know yet
    extra_note: "I sleep at 11pm and I don't want my roommate to be noisy after that time.",
    area: "Sylvan",
    reason: "N/A",
  };

  let user_object4 = {
    username: "BobBob24",
    gender: "Male", //male or female
    school_year: "Sophomore", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["MATH132", "HIST110", "PSY240"],
    hobby: "Doing gym", //not know yet
    extra_note: "Anyone wants to join my party every saturday?",
    area: "SouthWest",
    reason: "N/A",
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
    <div>
    <Dashboard changeRoute={changeRoute}/>
    <div className="swapRoom">
      <button onClick={toggleModal}>Add</button>
      <div>
        {posts.reverse().map((post) => <SwapPost post={post} />)}
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
              <Label htmlFor="password">Why do you want to swap?</Label>
              <div class="mb-3">
                
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Looking For?</Label>
              <div class="mb-3">
                
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder = "Hall Preferences: Cashin, Leach, etc. "
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
    </div>
  );
}
