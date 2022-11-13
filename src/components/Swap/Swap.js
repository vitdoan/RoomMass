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
import "./Swap.css";

let dorms = {
	North: ["Apt A", "Apt B", "Apt C", "Apt D"],
	Northeast: [
		"Crabtree",
		"Dwight",
		"Hamlin",
		"Johnson",
		"Knowlton",
		"Leach",
		"Lewis",
		"Mary Lyon",
		"Thatcher",
	],
	Southwest: [
		"Cance",
		"Coolidge",
		"Crampton",
		"Emerson",
		"James",
		"John Adams",
		"John Quincy Adams",
		"Kennedy",
		"MacKimmie",
		"Melville",
		"Moore",
		"Patterson",
		"Pierpont",
		"Prince",
		"Thoreau",
		"Washington",
	],
	Central: [
		"Baker",
		"Brett",
		"Brooks",
		"Butterfield",
		"Chadbourne",
		"Gorman",
		"Greenough",
		"Van Meter",
		"Wheeler",
	],
	CHC: ["Birch", "Elm", "Linden", "Maple", "Oak", "Sycamore"],
	"Orchard Hill": ["Dickinson", "Field", "Grayson", "Webster"],
	Sylvan: ["Brown", "Cashin", "McNamara"],
};

export default function Swap({isSignedIn, changeRoute, user}) {
  let user_object1 = {
    username: "CarlLiu",
    gender: "Male", //male or female
    school_year: "Freshman", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["CS121", "GEO101", "MATH131"],
    hobby: "Soccer", //not know yet
    extra_note: "I prefer a roommate, who can play soccer.",
    area: "Central",
    reason: "My roommate sleeps too early",
	time: new Date().getTime()
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
    reason: "My roommate hates AI",
	time: new Date().getTime()
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
	time: new Date().getTime()

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
    reason: "Boring roommate",
	time: new Date().getTime()
  };
  let user_object5 = {
	username: "PatrDM7777",
    gender: "Male", //male or female
    school_year: "Junior", //Freshman/Sorphomore/junior/senior
    working_time: "Late owl", //Late owl/Early bird
    courses: ["MATH132", "HIST110", "PSY240"],
    hobby: "Doing AI", //not know yet
    extra_note: "Anyone wants to join my party every saturday?",
    area: "Sylvan",
    reason: "Used to live in a double with no roommate",
	time: new Date().getTime()
  }
	let user_list = [user_object1, user_object2, user_object3, user_object4, user_object5];
	let [posts, setPosts] = useState(user_list);
	let [isModalOpen, setIsModalOpen] = useState(false);

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

	let [username, setUsername] = useState(user.username);
	let [gender, setGender] = useState("");
	let [schoolYear, setSchoolYear] = useState("");
	let [workingTime, setWorkingTime] = useState("");
	let [area, setArea] = useState("");
	let [hall, setHall] = useState("");
	let [extraNote, setExtraNote] = useState("");
  	let [reason, setReason] = useState('');

	const handleInputGender = (event) => {
		let value = event.target.value;
		console.log(value);
		setGender(value);
	};

	const handleInputArea = (event) => {
		let value = event.target.value;
		console.log(value);
		setArea(value);
	};

	const handleOptionsHall = () => {
		return dorms[area];
	};

	const handleInputHall = (event) => {
		let value = event.target.value;
		console.log(value);
		setHall(value);
	};

  const handleReason = (event) => {
		let value = event.target.value;
		console.log(value);
		setReason(value);
	};

	const handleExtraNote = (event) => {
		let value = event.target.value;
		console.log(value);
		setExtraNote(value);
	};


  const handleAddPost = () => {
		let obj = {
			username: username,
			gender: gender,
			school_year: schoolYear, //Freshman/Sorphomore/junior/senior
			working_time: workingTime, //Late Owl/Early bird
			hobby: "Some Hobby", //not know yet
      reason: reason,
			extra_note: extraNote,
			area: area,
			hall: hall,
			time: new Date().getTime()
		};
		let oldPost = posts;
		oldPost.push(obj);
		setPosts(oldPost);
	};


	return (
		<div>
			<Dashboard isSignedIn={isSignedIn} changeRoute={changeRoute} />
			<div className="swapRoom">
				<div className="optionsBar">
					<button onClick={toggleModal}>Post</button>
				</div>
				<div>
					{posts.map((post) => (
						<SwapPost post={post} />
					)).reverse()}
				</div>

				<Modal isOpen={isModalOpen} toggle={toggleModal}>
					<ModalHeader toggle={toggleModal}>Add A Post</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label htmlFor="username">Gender</Label>
								<select
									onChange={handleInputGender}
									class="form-select"
									aria-label="Default select example"
								>
									<option defaultValue>Select</option>
									<option value="Female">Female</option>
									<option value="Male">Male</option>
									<option value="Other">Other</option>
								</select>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Area</Label>
								<select
									onChange={handleInputArea}
									className="form-select"
									aria-label="Default select example"
								>
									<option defaultValue>Select</option>
									<option value="North">North</option>
									<option value="Northeast">Northeast</option>
									<option value="Central">Central</option>
									<option value="Southwest">Southwest</option>
									<option value="Orchard Hill">
										Orchard Hill
									</option>
									<option value="CHC">CHC</option>
									<option value="Sylvan">Sylvan</option>
								</select>
							</FormGroup>

							<FormGroup>
								<Label htmlFor="password">Hall</Label>
								<select
									onChange={handleInputHall}
									class="form-select"
									aria-label="Default select example"
								>
									<option defaultValue>Select</option>
									{handleOptionsHall() ? (
										handleOptionsHall().map((hall) => (
											<option value={hall}>{hall}</option>
										))
									) : (
										<></>
									)}
								</select>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">
									Why do you want to swap?
								</Label>
								<div class="mb-3">
									<textarea
                    onChange={handleReason}
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
                    onChange={handleExtraNote}
										class="form-control"
										id="exampleFormControlTextarea1"
										rows="3"
										placeholder="Hall Preferences: Cashin, Leach, etc. "
									></textarea>
								</div>
							</FormGroup>

							<Button
								onClick={() => {
									handleAddPost();
									toggleModal();
								}}
								value="submit"
								color="success"
							>
								Add
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		</div>
	);
}
