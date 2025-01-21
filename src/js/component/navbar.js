import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="d-flex justify-content-end">
		<nav className="navbar navbar-light bg-light mb-3">
			
			<div className=" ml-auto">
				<Link to="/demo">
					<button className="  btn btn-success">Add New Contact</button>
				</Link>
			</div>
		</nav>
		</div>
	);
};
