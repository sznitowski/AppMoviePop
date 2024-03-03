import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "../../components/MainPage";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./RegisterPage.css"

function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

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
                    "/api/users",
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
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <div className='regist-container'>
                        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
                        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                        {loading && <Loader />}
                        <div className="modal-form">
                            <form onSubmit={submitHandler}>
                                <TextField
                                    fullWidth
                                    label="Nombre"
                                    type="text"
                                    placeholder="Por favor ingrese su nombre"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    inputProps={{ style: { background: 'white' } }}
                                    className="mb-3"
                                />
                                <TextField
                                    fullWidth
                                    label="Apellido"
                                    type="text"
                                    placeholder="Por favor ingrese su apellido"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    inputProps={{ style: { background: 'white' } }}
                                    className="mb-3"
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    placeholder="Ingrese su email por favor"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    inputProps={{ style: { background: 'white' } }}
                                    className="mb-3"
                                />
                                <TextField
                                    fullWidth
                                    label="Contraseña"
                                    type="password"
                                    placeholder="Por favor ingrese una contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    inputProps={{ style: { background: 'white' } }}
                                    className="mb-3"
                                />
                                <TextField
                                    fullWidth
                                    label="Confirmar contraseña"
                                    type="password"
                                    placeholder="Confirme su contraseña por favor"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    inputProps={{ style: { background: 'white' } }}
                                    className="mb-3"
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                    disabled={loading}
                                >
                                    {loading ? 'Enviando...' : 'Enviar'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </MainPage>
    )
}

export default RegisterPage;
