const Study_Group = require("./StudyGroup");

class Group_Registration {
  constructor() {
    this.studyGroup;
  }
  createStudyGroup() {
    this.studyGroup = new Study_Group();
  }
  setGroupInfo({ title, category, summary, region, leaderID }) {
    this.studyGroup.setGroupInfo({
      title,
      category,
      summary,
      region,
      leaderID
    });
  }
  updatePost() {
    return this.studyGroup.updatePost();
  }
}
module.exports = Group_Registration;
