import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Radio } from "semantic-ui-react";
import styled from "styled-components";

const SignUp = () => {
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleSignUp = async () => {
    const userData = { userId, userPw, role };
    await fetch("http://localhost:1024/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      redirect: "manual"
    });
    window.location.href = "/";
  };

  const handleChange = (e, { value }) => setRole(value);
  const handleInput = (e, { name, value }) => {
    if (name === "userId") {
      setUserId(value);
      return;
    }
    setUserPw(value);
  };

  return (
    <div className="signup">
      <SignUpForm>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="USER ID"
              placeholder="User ID"
              name="userId"
              onChange={handleInput}
            />
            <Form.Field
              type="password"
              control={Input}
              label="PASSWORD"
              name="userPw"
              placeholder="Password"
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Select Role :</label>
            <Form.Field
              control={Radio}
              label="Study Leader"
              value="leader"
              checked={role === "leader"}
              onChange={handleChange}
            />
            <Form.Field
              control={Radio}
              label="Study Member"
              value="member"
              checked={role === "member"}
              onChange={handleChange}
            />
            <Form.Field
              control={Radio}
              label="Room Owner"
              value="owner"
              checked={role === "owner"}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Field
            control={Checkbox}
            label="I agree to the Terms and Conditions"
          />
          <Form.Field control={Button} onClick={handleSignUp}>
            Submit
          </Form.Field>
        </Form>
      </SignUpForm>
    </div>
  );
};

const SignUpForm = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

export default SignUp;
