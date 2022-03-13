import React, { useState, useEffect } from "react";
import MainPage from "../../components/MainPage";
import { Form, Button } from "react-bootstrap";


function RegisterPage({ history }) {

    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);


    /* const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
        } else dispatch(register(firstName, lastName, email, age, password, confirmPassword));
    }; */


    return (
        <MainPage title='Registrarse'>

            <div className='registContainer'>

                <Form>

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
        </MainPage>

    )
}

export default RegisterPage