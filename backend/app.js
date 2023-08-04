const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
	res.json([
		{
			id: 1,
			name: "John Doe",
		},
		{
			id: 2,
			name: "Jane Doe",
		},
		{
			id: 3,
			name: "John Smith",
		},
		{
			id: 4,
			name: "Jane Smith",
		},
		{
			id: 5,
			name: "Helen Doe",
		},
		{
			id: 6,
			name: "Oghene Doe",
		},
	]);
});

app.listen(5050, () => {
	console.log("LISTENING ON PORT BLAH BLAH");
});
