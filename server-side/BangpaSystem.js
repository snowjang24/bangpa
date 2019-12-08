const Group_Registration = require("./GroupRegistartion");

class Bangpa_System {
  constructor() {
    this.groupRegistration;
  }
  makeNewGroup() {
    this.createGroupRegistration();
    this.groupRegistration.createStudyGroup();
    console.log("Operation.01 Completed");
  }

  createGroupRegistration() {
    this.groupRegistration = new Group_Registration();
  }

  enterGroupInfo({ title, category, summary, region, leaderID }) {
    this.groupRegistration.setGroupInfo({
      title,
      category,
      summary,
      region,
      leaderID
    });
    console.log("Operation.02 Completed");
  }
  endMakingGroup() {
    return this.groupRegistration.updatePost();
  }
}

module.exports = Bangpa_System;
