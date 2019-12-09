const Group_Registration = require("./GroupRegistartion");
const DBHandler = require("./DBHandler");
const Evaluation = require("./Evaluation");

class Bangpa_System {
  constructor() {
    this.groupRegistration;
    this.evaluation;
    this.dbHandler = new DBHandler();
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

  startEvaluation({ studyGroupID }) {
    return this.getListOfMember({ studyGroupID });
  }

  getListOfMember({ studyGroupID }) {
    const data = this.dbHandler.readDataFromDB({ type: "group" });
    const selectedGroup = data.group_info.filter(
      dataObj => dataObj.studyGroupID === studyGroupID
    );
    return selectedGroup[0];
  }

  evaluateMember({ memberID, gradePoint, gradeComments }) {
    this.createEvaluateMember(memberID);
    return this.setEvaluationInfo({
      studyGroupID: this.currentTargetGroupId,
      gradePoint,
      gradeComments
    });
  }
  createEvaluateMember(memberID) {
    this.evaluation = new Evaluation({ memberID });
  }
  setEvaluationInfo({ gradePoint, gradeComments }) {
    return this.evaluation.setEvaluationInfo({ gradePoint, gradeComments });
  }
}

module.exports = Bangpa_System;
