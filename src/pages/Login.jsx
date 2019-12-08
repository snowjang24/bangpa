import React from "react";
import {
  Button,
  Header,
  Message,
  Form,
  Grid,
  Segment
} from "semantic-ui-react";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "/studygroup";
  };

  //   const handleChange = (e, { name, value }) => this.setState({ [name]: value });

  return (
    <div className="login">
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            Log-in to Bangpa
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="User Id"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="blue" fluid size="large" onClick={handleLogin}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="/signup">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
      )
    </div>
  );
};

export default Login;
