const shortid = require("shortid");
const DBHandler = require("./DBHandler");
const StudyGroup_Post = require("./StudyGroupPost");

class Study_Group {
  constructor() {
    this.studyGroupID;
    this.generateID();
    this.dbHandler = new DBHandler();
    this.studyGroupPost;
  }

  generateID() {
    this.studyGroupID = shortid.generate();
  }
  setGroupInfo({ title, category, summary, region, leaderID }) {
    const groupInfo = { leaderID, studyGroupID: this.studyGroupID };
    this.dbHandler.writeDataToDB({ type: "group", data: groupInfo });
    this.createGroupPost({
      title,
      category,
      summary,
      region,
      studyGroupID: this.studyGroupID
    });
  }
  createGroupPost({ title, category, summary, region, studyGroupID }) {
    this.studyGroupPost = new StudyGroup_Post({
      title,
      category,
      summary,
      region,
      studyGroupID
    });
  }
  updatePost() {
    return this.studyGroupPost.updatePost();
  }
}
module.exports = Study_Group;
