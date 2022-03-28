import { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Button, Modal } from "react-bootstrap";
import MainPage from "../../components/MainPage";
import axios from "axios";
import './PostList.css'

function PostCard() {

    const [posts, setPosts] = useState([])
    const [getPostById, setGetPostById] = useState({})

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);



    async function getAllData() {
        try {
            const { data } = await axios.get("/api/posts");
            setPosts(data.data);
        } catch (err) {
        }
    }

    const getDataById = async (id) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            },
        };
        console.log(id)
        if (id) {
            try {
                const { data } = await axios.get(`/api/posts/${id}`, config);
                setGetPostById(data.data);
                console.log(data)
            } catch (err) {
            }
        }
    }
    useEffect(() => {
        getAllData();
    }, [getPostById])

    const showMovie = (id) => {
        getDataById(id)
        setShow(true)
    }

    return (
        <>
            <MainPage title='Película'>

                {posts.length > 0 && posts.map(post => (

                    <div className="post-list" onClick={() => (showMovie(post._id))}>

                        <div className="cards-body" key={post._id}>
                            <img className='card-image' variant="top" src={post.image} />
                            <h2>{post.title}</h2>
                        </div>
                    </div>
                ))}


                <Modal className="modal-card" show={show} onHide={handleClose} animation={false}>
                    <Modal.Header>
                        <Card><img src={getPostById?.image} /></Card>
                    </Modal.Header>

                    <Modal.Body>
                        <Modal.Title>
                            <h2 className="text-center">Título: {getPostById?.title}</h2>
                           
                            </Modal.Title>
                        <Card>
                            <h5>Lenguaje: {getPostById?.languaje}</h5>
                        </Card>
                        <Card>
                            <h5>Género: {getPostById?.gender}</h5>
                        </Card>
                        <Card>
                            <h5>Fecha de lanzamiento: {getPostById?.date}</h5>
                        </Card>
                        <Card>
                            <h5 className="text-center">Sinopsis: </h5>
                            {getPostById?.synopsis}
                        </Card>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </MainPage >
        </>
    );
}

export default PostCard;


