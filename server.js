const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 1024;

const Bangpa_System = require("./server-side/BangpaSystem");

const bangpaSystem = new Bangpa_System();

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/newgroup", (req, res) => {
  bangpaSystem.makeNewGroup();
});

app.get("/data/groupinfo", (req, res) => {
  fs.readFile("./data/group_info.json", "utf8", (err, data) => {
    res.json(JSON.parse(data));
    return;
  });
});

app.post("/data/groupinfo", (req, res) => {
  const groupInfoDBPath = "./data/group_info.json";
  const newGroupData = req.body;
  const groupInfoDB = JSON.parse(fs.readFileSync(groupInfoDBPath, "utf8"));

  groupInfoDB.groupList = [...groupInfoDB.groupList, newGroupData];

  fs.writeFileSync(groupInfoDBPath, JSON.stringify(groupInfoDB), e =>
    console.log(e)
  );
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  // fs.readFile("./src/user_info.json", "utf8", (err, data) => {});
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
