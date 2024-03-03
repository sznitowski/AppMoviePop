import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='main'>
            <Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} className='intro-text'>
                        <Typography variant='h1' className='title'>Bienvenido!</Typography>
                        <div className='buttonContainer'>
                            <Link to='/login' className='link'>
                                <Button 
                                    className='landingButton' 
                                    variant='outlined'
                                    size='large'
                                >
                                    Iniciar sesión
                                </Button>
                            </Link>
                            <Link to='/register' className='link'>
                                <Button 
                                    className='landingButton' 
                                    variant='outlined'
                                    size='large'
                                >
                                    Registrarse
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default LandingPage;
