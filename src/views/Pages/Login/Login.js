import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
// import logo from "../../../assets/img/brand/Synergasia.png";
import logo from "../../../assets/img/brand/pace-logo.svg";
import { routesURL } from "../../../constant/routesURL";
import { tostify } from "../../../helper/Tostify";
import database from "./../../../database/database.json";

class Login extends Component {
  state = {
    username: null,
    password: null,
    error: null,
    members: []
  };
  componentDidMount() {
    const members = [...this.state.members];
    database.members.forEach(res => {
      members.push(res);
    });
    this.setState({
      members
    });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    let { username, password } = this.state;
    let error = true;
    if (username !== "admin" || username === null) {
      error = true;
    } else error = false;
    if (password !== "admin123" || password === null) {
      error = true;
    } else error = false;
    database.members.every(res => {
      if (username === res.email && password === res.password) {
        localStorage.setItem("role", "member");
        localStorage.setItem("member", username);
        setTimeout(() => (window.location.hash = routesURL.DASHBOARD), 0);
        error = false;
      }
      return error;
    });

    // if (username === "hda@narola.email" && password === "123") {
    //   tostify("Login Success", "success");
    //   localStorage.setItem("role", "member");
    //   return (window.location.hash = routesURL.DASHBOARD);
    // }
    // this.setState({ error });
    void (error === false && tostify("Login Success", "success"));
    void (error === true && tostify("Username and Password invalid", "error"));
    return error === false && (window.location.hash = routesURL.DASHBOARD);
  };
  render() {
    console.info("[Login.js] this.state.members ======>", this.state.members);

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col sm="12" md="12" xl="10">
              <CardGroup
                className="flex-column-reverse flex-md-row"
                style={{ height: "100%" }}
              >
                <Card className="p-4 " style={{ height: "100%" }}>
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <h2>Login</h2>
                      <p className="text-muted">Sign In to your account</p>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          className={this.state.error === true && "is-invalid"}
                          type="text"
                          name="username"
                          onChange={this.handleChange}
                          placeholder="Username"
                          autoComplete="username"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          className={this.state.error === true && "is-invalid"}
                          type="password"
                          name="password"
                          onChange={this.handleChange}
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            type="submit"
                            className="px-4"
                          >
                            Login
                          </Button>
                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col> */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-dark p-4 mb-0 d-sm-down-none"
                  style={{
                    backgroundColor: "#CCECFF",
                    height: "100%"
                  }}
                >
                  <CardBody className="text-center animated fadeIn d-flex align-items-center justify-content-center">
                    <img className="img-fluid" src={logo} alt="" />
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
