const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const Bangpa_System = require("./server-side/BangpaSystem");

const app = express();
const port = process.env.PORT || 1024;

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
  fs.readFile(__dirname + "/data/groupPost_info.json", "utf8", (err, data) => {
    res.json(data);
    return;
  });
});

app.post("/data/groupinfo", (req, res) => {
  const { title, summary, category, region, leaderID } = req.body;
  bangpaSystem.enterGroupInfo({ title, category, summary, region, leaderID });
  const message = bangpaSystem.endMakingGroup();
  res.json({ message });
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  // fs.readFile("./src/user_info.json", "utf8", (err, data) => {});
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
