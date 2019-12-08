import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { List, Button } from "semantic-ui-react";
import styled from "styled-components";

const StudyGroup = () => {
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    getGroupList();
  }, []);

  const getGroupList = async () => {
    const res = await fetch("http://localhost:1024/data/groupinfo");
    const data = await res.json();
    setGroupList(data.groupList);
  };
  const handleCreateBtn = () => {
    window.location.href = "/newgroup";
  };

  return (
    <Layout>
      <StudyGroupList className="studygroup">
        <GroupPostTitle>
          <h1>Study Group</h1>
          <div>
            <Button onClick={handleCreateBtn} primary size="small">
              + New Study Group
            </Button>
          </div>
        </GroupPostTitle>
        <div className="group-post-container">
          {groupList.map(group => {
            return (
              <List
                selection
                verticalAlign="middle"
                key={group.groupPostId}
                onClick={() =>
                  (window.location.href = `/studygroup/${group.groupPostId}`)
                }
              >
                <List.Item>
                  <List.Content>
                    <List.Header>{group.title}</List.Header>
                    {group.category}
                  </List.Content>
                </List.Item>
              </List>
            );
          })}
        </div>
      </StudyGroupList>
    </Layout>
  );
};
const StudyGroupList = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const GroupPostTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default StudyGroup;
