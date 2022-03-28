import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainPage from "../../components/MainPage";
import { Button, Form, Row, Col } from "react-bootstrap"
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./LoginPage.css";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            setLoading(true)

            const { data } = await axios.post('/api/users/login',
                {
                    email, password
                },
                config)

            console.log(data)
            localStorage.setItem('userInfo', JSON.stringify(data));

            navigate("/posts")

            setLoading(false)
        } catch (error) {
            setError(error.response.data.message)
            setLoading(false)
        }
    };


    return <MainPage title="Iniciar sesión">

        <div className="login-container">

            {error && <ErrorMessage variant='danger'>
                {error}</ErrorMessage>}
            {loading && <Loader />}

            <div className="modal-form">
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Por favor ingrese su email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Porfavor ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
                <Row className="py-3">
                    <Col>
                        Sos usuario nuevo ? <Link to="/register">Click aqui para registrarse</Link>
                    </Col>
                </Row>
            </Form>
            </div>
        </div>

    </MainPage>
}

export default LoginPage