import React from "react";
import ReactDOM from "react-dom";
import Application from "./components/Application";
import "./assets/styles/main.css";

try {
	const app = document.getElementById("app");
	const renderOrHydrate = app.innerHTML.trim().length ? "hydrate" : "render";
	
	ReactDOM[renderOrHydrate](
		<Application />,
		app
	);

} catch (e) {
	console.log(e)
}
