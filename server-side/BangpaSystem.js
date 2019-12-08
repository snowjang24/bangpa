const Group_Registration = require("./GroupRegistartion");

class Bangpa_System {
  constructor() {
    this.groupRegistration;
  }
  makeNewGroup() {
    this.groupRegistration = this.createGroupRegistration();
    const studyGroup = groupRegistration.createStudyGroup();
  }

  createGroupRegistration() {
    return new Group_Registration();
  }
}

module.exports = Bangpa_System;
