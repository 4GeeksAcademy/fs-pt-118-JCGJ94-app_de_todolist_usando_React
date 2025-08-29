import React,{useState} from "react";

import TodoList from "./todoList.jsx";


//create your first component
const Home = () => {

	return (
		<div className="containe text-center dflex flex-column align-items-center">
			<TodoList />
		</div>
	);	
};

export default Home;