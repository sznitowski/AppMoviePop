import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "../../components/MainPage";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./RegisterPage.css"

function RegisterPage() {

    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Las contraseñas no coinciden");
        } else {
            setMessage(null)
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json"
                    },
                };

                setLoading(true);

                const { data } = await axios.post(
                    "api/users",
                    { firstName, lastName, email, password },
                    config
                )

                setLoading(false);
                localStorage.setItem("userInfo", JSON.stringify(data));

                navigate("/posts")

            } catch (error) {
                setError(error.response.data.message);
            }
        }
    }

    return (
        <MainPage title='Registrarse'>

            <div className='regist-container'>

                {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
                {error && <ErrorMessage variant='danger'>
                    {error}</ErrorMessage>}
                {loading && <Loader />}

                <div className="modal-form">
                    <Form onSubmit={submitHandler}>

                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Porfavor Ingrese su numbre"
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="lastname"
                                placeholder="Por favor ingrese su apellido"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese su Email porfavor"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Porfavor Ingrese una contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>confirmar contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirme su contraseña porfavor"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>

                    </Form>

                </div>
            </div>

        </MainPage>
    )
}

export default RegisterPage