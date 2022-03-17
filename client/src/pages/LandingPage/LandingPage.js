import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {

    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <h1 className='title'>Bienvenido!</h1>
                        
                    <div className='buttonContainer'>

                        <a href='/login'>
                            <Button 
                            className='landingButton' 
                            variant='outline-light'
                            size='lg'>
                                Iniciar sesión
                            </Button>
                        </a>
                        <a href='/register'>
                            <Button 
                            className='landingButton' 
                            variant='outline-light'
                            size='lg'>
                                Registrarse
                            </Button>
                        </a>
                        
                    </div>

                    </div>

                </Row>
            </Container>
        </div>
    )
}

export default LandingPage