import React from "react";
import Layout from "../components/Layout/Layout";

const GroupPost = ({ match }) => {
  const groupPostId = match.params.group_post_id;

  const groupInfo = {
    groupPostId: 13,
    category: "IT",
    title: "Python Programming",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint numquam doloremque natus id quidem similique, commodi illum unde ut eveniet, autem repellendus vel quasi. Nulla incidunt quo labore minima officiis.",
    region: "Suwon"
  };

  return (
    <div className="grouppost">
      <Layout>
        <div>Group Post</div>
        <div>{groupPostId}</div>
        <div>{groupInfo.category}</div>
        <div>{groupInfo.summary}</div>
        <div>{groupInfo.region}</div>
      </Layout>
    </div>
  );
};

export default GroupPost;
