import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainPage from "../../components/MainPage";
import { Button, Form, Row, Col } from "react-bootstrap"
import "./LoginPage.css";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return <MainPage title="Login">

        <div className="loginContainer">

            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Please enter your email here"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Please enter your password here"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Row className="py-3">
                    <Col>
                        New user ? <Link to="/register">Regist here</Link>
                    </Col>
                </Row>
            </Form>

        </div>

    </MainPage>
}

export default LoginPage