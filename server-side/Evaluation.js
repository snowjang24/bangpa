const DBHandler = require("./DBHandler");

class Evaluation {
  constructor(props) {
    this.props = props;
    this.dbHandler = new DBHandler();
  }
  setEvaluationInfo({ gradePoint, gradeComments }) {
    const data = { memberID: this.props.memberID, gradePoint, gradeComments };
    return this.dbHandler.writeDataToDB({ type: "user", data });
  }
}

module.exports = Evaluation;
