const fs = require("fs");

class DBHandler {
  constructor() {
    this.groupDB;
    this.userDB;
    this.spaceDB;
  }

  readDataFromDB({ type }) {
    return JSON.parse(
      fs.readFileSync(
        __dirname.replace("server-side", "data") + `/${type}_info.json`,
        "utf8"
      )
    );
  }

  writeDataToDB({ type, data }) {
    const existDB = JSON.parse(
      fs.readFileSync(
        __dirname.replace("server-side", "data") + `/${type}_info.json`,
        "utf8"
      )
    );
    existDB[`${type}_info`] = [...existDB[`${type}_info`], data];
    fs.writeFileSync(
      __dirname.replace("server-side", "data") + `/${type}_info.json`,
      JSON.stringify(existDB),
      e => console.log(e)
    );
    return "success";
  }
}
module.exports = DBHandler;
