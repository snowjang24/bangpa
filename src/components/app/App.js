import React from "react";
import "./app.scss";

import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import StudyGroup from "../../pages/StudyGroup";
import StudySpace from "../../pages/StudySpace";
import MyPage from "../../pages/MyPage";
import NotFound from "../../pages/NotFound";
import SpacePost from "../../pages/SpacePost";
import GroupPost from "../../pages/GroupPost";
import NewStudyGroup from "../../pages/NewStudyGroup";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/mypage" component={MyPage} />
          <Route exact path="/studygroup" component={StudyGroup} />
          <Route path="/studygroup/:group_post_id" component={GroupPost} />

          <Route exact path="/studyspace" component={StudySpace} />
          <Route path="/studyspace/:space_id" component={SpacePost} />
          <Route path="/newgroup" component={NewStudyGroup} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
