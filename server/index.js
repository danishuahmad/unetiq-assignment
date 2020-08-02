let cors = require('cors');

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { default: clientRenderer } = require("./clientRender");
const { default: apiRoutes } = require("./routes/api");
//const { default: clientRenderer } = require("./clientRender");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.use("/static", express.static(path.resolve(__dirname, "..", "build")));

// only use the raw bodyParser for stripe web-hook
app.use((req, res, next) => {
	bodyParser.json()(req, res, next);
});
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", apiRoutes);
app.use("/", clientRenderer);

let server = app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});

app.on("error", onError);

function onError(error) {
	if (error.syscall !== "listen") {
		throw error;
	}
	
	var bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;
	
	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}
