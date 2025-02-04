const express = require("express");
const cors = require("cors");
const db = require("./firebase");
const { spawn } = require("child_process");
const app = express();
app.use(cors());

app.get("/getData/:query", async (req, res) => {
  try {
    const text = req.params.query;
    //   "What can I do to optimize this Python program that calculates the factorial of a given number?";
    // Use child process to run Python script
    const pythonProcess = spawn("python3", ["model/main.py", text]);

    let result = [];

    pythonProcess.stdout.on("data", (data) => {
      const pythonOutput = data.toString();
      try {
        // Assuming the Python script sends a JSON-formatted array of strings
        result = pythonOutput;
        res.json(pythonOutput);
      } catch (error) {
        console.error(`Error parsing Python output as JSON: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Error from Python script: ${data}`);
      res.status(500).json({ error: "Internal Server Error" });
    });

    pythonProcess.on("close", (code) => {
      // Respond with the result after the Python script has finished
      if (code === 0) {
        // res.json({ result });
      } else {
        console.error(`Python script exited with code ${code}`);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } catch (error) {
    console.error("Error getting data from Firestore", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
