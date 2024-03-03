import React from 'react';
import { Container, Typography, Divider, Grid } from '@mui/material';
import './MainPage.css';

const MainPage = ({ title, children }) => {
    return (
        <div className='mainback'>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <div className='page'>
                            {title && (
                                <>
                                    <Typography variant='h1' className='heading'>{title}</Typography>
                                    <Divider />
                                </>
                            )}
                            {children}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default MainPage;
