import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const validUser = {
  name: "itskios-09",
  password: "test1234",
};

app.post("/api/login", (req, res) => {
  const { name, password } = req.body;

  if (name === validUser.name && password === validUser.password) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
