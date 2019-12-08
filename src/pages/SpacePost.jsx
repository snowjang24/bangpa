import React from "react";
import Layout from "../components/Layout/Layout";

const SpacePost = ({ match }) => {
  const spaceId = match.params.space_id;
  return (
    <div className="spacepost">
      <Layout>
        <div>Space Post</div>
        <div>{spaceId}</div>
      </Layout>
    </div>
  );
};

export default SpacePost;
