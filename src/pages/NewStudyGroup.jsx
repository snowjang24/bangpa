import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import styled from "styled-components";

const options = {
  category: [
    { key: "it", text: "IT", value: "IT" },
    { key: "math", text: "Math", value: "Math" },
    { key: "social", text: "Social", value: "Social" }
  ],
  region: [
    { key: "suwon", text: "Suwon", value: "Suwon" },
    { key: "busan", text: "Busan", value: "Busan" },
    { key: "seoul", text: "Seoul", value: "Seoul" }
  ]
};

const NewStudyGroup = () => {
  const [groupData, setGroupData] = useState();
  useEffect(() => {
    fetch("http://localhost:1024/newgroup", {
      method: "GET"
    });
  }, []);

  const handleChange = (e, { name, value }) => {
    return setGroupData({ ...groupData, [name]: value });
  };

  const handleCreatePost = async () => {
    const res = await fetch("http://localhost:1024/data/groupinfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...groupData,
        leaderID: Math.floor(Math.random() * (100000000 - 1) + 1)
      }),
      redirect: "manual"
    });
    const data = await res.json();
    alert(data.message);
    window.location.href = "/studygroup";
  };

  return (
    <div className="newpost">
      <PostForm>
        <Form>
          <Form.Input
            fluid
            label="Post Title"
            placeholder="Post Title"
            onChange={handleChange}
            name="title"
          />
          <Form.TextArea
            label="Summary"
            placeholder="Tell us more about your group..."
            onChange={handleChange}
            name="summary"
          />
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Category"
              name="category"
              options={options.category}
              placeholder="Category"
              onChange={handleChange}
            />
            <Form.Select
              fluid
              label="Region"
              name="region"
              options={options.region}
              placeholder="Region"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <Button primary fluid onClick={handleCreatePost}>
          Create New Study Group
        </Button>
      </PostForm>
    </div>
  );
};

const PostForm = styled.div`
  max-width: 560px;
  margin: 0 auto;
`;

export default NewStudyGroup;
