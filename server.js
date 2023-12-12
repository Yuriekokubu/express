const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/data", async (req, res) => {
	try {
		const apiUrl = "http://emi-hfu.pea.co.th/API_BILL/InfoAllMRU?search=";
		const response = await fetch(apiUrl);
		const data = await response.json();
		res.json(data);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.listen(port, () => {
	console.log(`Proxy server listening at http://localhost:${port}/api/data`);
});
