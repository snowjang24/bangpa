import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import {
  List,
  Image,
  Button,
  Modal,
  Rating,
  TextArea
} from "semantic-ui-react";
import styled from "styled-components";

const imgUrlList = [
  "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcdbk1Fs7EWlDHH4qsWbyTJJcNIdhRRH_-RV41tAyTpMyL0YE&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LZfyTew8mpV7aaTAE-IesXVdJklkDfjWD__Y_oUNtbz3ppkL&s"
];

const MyPage = () => {
  const studyGroupID = "Qs48NdXf";
  const [groupInfo, setGroupInfo] = useState([]);
  const [open, setOpen] = useState(false);
  const [rateTarget, setRateTarget] = useState({});
  const [rate, setRate] = useState({});
  const [comment, setComment] = useState("");

  const handleEvaluation = async () => {
    const res = await fetch(
      `http://localhost:1024/data/groupinfo/${studyGroupID}`
    );
    const data = await res.json();
    await setGroupInfo(data.member);
  };

  const handleMemberRate = async e => {
    setOpen(true);
    setRateTarget(e.currentTarget.dataset);
  };

  const handleClose = e => {
    setOpen(false);
    if (e.currentTarget.className.includes("right")) {
      const data = {
        memberID: rateTarget.id,
        gradePoint: rate.rating,
        gradeComments: comment
      };
      const res = fetch(`http://localhost:1024/data/rate/${rateTarget.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        redirect: "manual"
      });
      res.then(data => data.json()).then(converted => alert(converted.message));
    }
  };
  const handleRate = (e, { rating, maxRating }) =>
    setRate({ rating, maxRating });

  const handleTextArea = (e, { value }) => {
    setComment(value);
  };

  return (
    <div className="mypage">
      <Layout>
        <MyPageContainer>
          <h2>My Profile</h2>
          <List selection verticalAlign="middle">
            <List.Item>
              <Image
                avatar
                src="https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58481.jpg"
              />
              <List.Content>
                <List.Header>Snow</List.Header>
                Leader
              </List.Content>
            </List.Item>
          </List>
          <RateMemberContainer>
            <h2>My Group</h2>
            <Modal size="tiny" open={open} onClose={handleClose}>
              <Modal.Header>Rate Your Group Member</Modal.Header>
              <Modal.Content>
                <List>
                  <List.Item>
                    <Image avatar src={imgUrlList[1]} />
                    <List.Content>
                      <List.Header>{rateTarget.name}</List.Header>
                      Member
                    </List.Content>
                    <Rating
                      icon="star"
                      defaultRating={0}
                      maxRating={5}
                      onRate={handleRate}
                    />
                  </List.Item>
                  <TextArea
                    rows={2}
                    placeholder="Please Comment Your Member"
                    onChange={handleTextArea}
                  />
                </List>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={handleClose}>
                  No
                </Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Yes"
                  onClick={handleClose}
                />
              </Modal.Actions>
            </Modal>
            <div>
              <Button primary size="small" onClick={handleEvaluation}>
                Rate Group Member
              </Button>
            </div>
          </RateMemberContainer>
          <div>
            <List selection verticalAlign="middle">
              {groupInfo.map((groupMember, index) => {
                return (
                  <List.Item
                    data-id={`${Math.floor(
                      Math.random() * (100000000 - 1) + 1
                    )}`}
                    data-name={groupMember.name}
                    onClick={handleMemberRate}
                  >
                    <Image avatar src={imgUrlList[index]} />
                    <List.Content>
                      <List.Header>{groupMember.name}</List.Header>
                      Member
                    </List.Content>
                  </List.Item>
                );
              })}
            </List>
          </div>
        </MyPageContainer>
      </Layout>
    </div>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;
const RateMemberContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
