import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainPage from "../../components/MainPage";
import { Button, TextField, Grid, Typography, Box } from "@mui/material";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./LoginPage.css";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };

            setLoading(true);

            const { data } = await axios.post('/api/users/login',
                {
                    email, password
                },
                config);

            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data));

            navigate("/posts");

            setLoading(false);
        } catch (error) {
            setError(error.response.data.message);
            setLoading(false);
        }
    };

    return (
        <MainPage title="Iniciar sesión">
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6}>
                  
                        <div className="login-container">
                            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                            {loading && <Loader />}
                            <div className="modal-form">
                                <form onSubmit={submitHandler}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                variant="outlined"
                                                value={email}
                                                placeholder="Por favor ingrese su email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                inputProps={{ style: { background: 'white' } }}
                                                className="mb-3"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                type="password"
                                                label="Contraseña"
                                                variant="outlined"
                                                placeholder="Por favor ingrese su contraseña"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                inputProps={{ style: { background: 'white' } }}
                                                className="mb-3"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" color="primary" type="submit" fullWidth>
                                                Enviar
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body1">
                                                ¿Eres un usuario nuevo? <Link to="/register">Haz clic aquí para registrarte</Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </div>
                   
                </Grid>
            </Grid>
        </MainPage>
    );
}

export default LoginPage;
