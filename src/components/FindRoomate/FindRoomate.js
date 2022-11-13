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
import RenderPost from "./RenderPost";

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

export default function FindRoomate({changeRoute}) {
	let user_object1 = {
		username: "LoHuyn987",
		gender: "Male", //male or female
		school_year: "Junior", //Freshman/Sophomore/junior/senior
		working_time: "Late Owl", //Late Owl/Early bird
		courses: ["CS311", "CS377", "STAT515", "CS383"],
		hobby: "Leetcode!!!", //not know yet
		extra_note: "I'm looking for Katlyn.",
		area: "Central",
		contact: "lbh987@gmail.com",
	};

	let user_object2 = {
		username: "VVdoingBackEnd",
		gender: "Female", //male or female
		school_year: "Junior", //Freshman/Sorphomore/junior/senior
		working_time: "Late Owl", //Late Owl/Early bird
		courses: ["CS311", "CS383", "CS446", "CS326"],
		hobby: "Frontend", //not know yet
		extra_note: "I'm learning backend. Can anyone help me?",
		area: "Sylvan",
		contact: "vvd097@gmail.com",
	};

	let user_object3 = {
		username: "FindRoommate",
		gender: "Female", //male or female
		school_year: "Freshman", //Freshman/Sorphomore/junior/senior
		working_time: "Late Owl", //Late Owl/Early bird
		courses: ["CS121", "HIST101", "PHY141"],
		hobby: "Cooking and singing", //not know yet
		extra_note: "I'm new to UMass. I just want to make friend",
		area: "Central",
		contact: "laylalay@gmail.com",
	};

	let user_object4 = {
		username: "KayBob",
		gender: "Male", //male or female
		school_year: "Senior", //Freshman/Sorphomore/junior/senior
		working_time: "Late Owl", //Late Owl/Early bird
		courses: ["PHY576", "CS556", "CICS305", "MATH545"],
		hobby: "I love Kpop", //not know yet
		extra_note: "Finding ARMY roommate",
		area: "Northeast",
		contact: "KayBob237@gmail.com",
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

	let [gender, setGender] = useState("");
	let [schoolYear, setSchoolYear] = useState("");
	let [workingTime, setWorkingTime] = useState("");
	let [area, setArea] = useState("");
	let [hall, setHall] = useState("");
	let [extraNote, setExtraNote] = useState("");

	const handleInputGender = (event) => {
		let value = event.target.value;
		console.log(value);
		setGender(value);
	};

	const handleInputSchoolYear = (event) => {
		let value = event.target.value;
		console.log(value);
		setSchoolYear(value);
	};

	const handleInputWorkingTime = (event) => {
		let value = event.target.value;
		console.log(value);
		setWorkingTime(value);
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

	const handleExtraNote = (event) => {
		let value = event.target.value;
		console.log(value);
		setExtraNote(value);
	};

	const handleAddPost = () => {
		let obj = {
			username: "Some username",
			gender: gender,
			school_year: schoolYear, //Freshman/Sorphomore/junior/senior
			working_time: workingTime, //Late Owl/Early bird
			hobby: "Some Hobby", //not know yet
			extra_note: extraNote,
			area: area,
			hall: hall,
		};
		let oldPost = posts;
		oldPost.push(obj);
		console.log(oldPost);
		setPosts(oldPost);
	};

	return (
		<div>
			<Dashboard changeRoute={changeRoute}/>
			<div className="findRoomate">
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
								<Label htmlFor="password">School Year</Label>
								<select
									onChange={handleInputSchoolYear}
									class="form-select"
									aria-label="Default select example"
								>
									<option defaultValue>Select</option>
									<option value="Freshman">Freshman</option>
									<option value="Sophomore">Sophomore</option>
									<option value="Junior">Junior</option>
									<option value="Senior">Senior</option>
								</select>
							</FormGroup>

							<FormGroup>
								<form onChange={handleInputWorkingTime}>
									<p>Working Time:</p>
									<input
										type="radio"
										name="working_time"
										value="Late Owl"
									/>
									<label for="Late Owl"> Late Owl</label>{" "}
									<span>&nbsp;</span>
									<input
										type="radio"
										name="working_time"
										value="Early Bird"
									/>
									<label for="Early Bird"> Early Bird</label>
								</form>
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
								<Label htmlFor="password">Extra Notes</Label>
								<div class="mb-3">
									<textarea
										onChange={handleExtraNote}
										class="form-control"
										id="exampleFormControlTextarea1"
										rows="3"
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
                <div className="optionsBar">
                    <div>
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
                        <option value="Orchard Hill">Orchard Hill</option>
                        <option value="Sylvan">Sylvan</option>
                    </select>
                    </div>
                    <div>
                        <button onClick={toggleModal}>+</button>
                    </div>
                </div>
				<div>
					{isFilter
						? filter
								.map((post) => <RenderPost post={post} />)
								.reverse()
						: posts
								.map((post) => <RenderPost post={post} />)
								.reverse()}
				</div>
			</div>
		</div>
	);
}
