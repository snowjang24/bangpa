import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar className="navbar">
        <div className="container">
          <div className="menu-btn-group">
            <Link to="/studygroup">Study Group</Link>
            <Link to="/studyspace">Study Space</Link>
          </div>
          <div className="mypage-btn-group">
            <Link to="/mypage">My Page</Link>
          </div>
        </div>
      </Navbar>
      <div>{children}</div>
    </div>
  );
};

const Navbar = styled.div`
  width: 100vw;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  & > .container {
    display: flex;
    max-width: 860px;
    margin: 0 auto;
    margin-bottom: 16px;
    & a {
      padding: 16px;
      display: inline-block;
      color: #0391ff;
      font-weight: bold;
      &:hover {
        background: #0391ff50;
      }
    }
    & > .menu-btn-group {
      flex: 1 0;
    }
  }
`;

export default Layout;
