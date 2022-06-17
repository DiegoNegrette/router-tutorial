import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const QueryNavLink = ({ to, ...props }) => {
	let location = useLocation();
	return <NavLink to={to + location.search} {...props} />;
};

export default QueryNavLink;
