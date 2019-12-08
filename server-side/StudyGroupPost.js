const DBHandler = require("./DBHandler");

class StudyGroup_Post {
  constructor(props) {
    this.props = props;
    this.dbHandler = new DBHandler();
  }

  updatePost() {
    return this.setGroupPostInfo();
  }
  setGroupPostInfo() {
    const groupPostInfo = {
      title: this.props.title,
      studyGroupID: this.props.studyGroupID,
      category: this.props.category,
      summary: this.props.summary,
      region: this.props.region
    };
    this.dbHandler.writeDataToDB({ type: "groupPost", data: groupPostInfo });
    return "success";
  }
}
module.exports = StudyGroup_Post;
