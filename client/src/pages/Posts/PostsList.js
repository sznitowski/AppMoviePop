import { useEffect, useState } from "react";
import MainPage from "../../components/MainPage";
import { Card, Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import './PostList.css'

function PostsList() {

    const [show, setShow] = useState(false);
    const [posts, setPosts] = useState([])
    const [getPostById, setGetPostById] = useState([])

    const fetchPosts = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const { data } = await axios.get('/api/posts', config);

        setPosts(data.data)
        console.log(data)
    }

    const fetchPostById = async (id) => {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        console.log(id)
        if (id) {
            try {
                const data = await axios.get(`/api/posts/${id}`, config);
                setGetPostById(data.data);
            } catch (err) {
            }
        }
    }
    useEffect(() => {
        fetchPostById();
        fetchPosts();
    }, [])

    return (
        <>
            <MainPage title='Listado de películas'>
                <h2 className="mb-2 ml-2" tittle='Películas'>
                    Peliculas
                </h2>
                {posts && posts.map(post => (
                    <div className="post-list">

                        <Card color="primary" className="px-4">
                            <div key={post._id}>
                                <Card.Img variant="top" src={post.image} />
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    {/* <Button key={post._id} variant="primary" onClick={() => (getPostById(setShow(true)))}>
                                        Ir a...
                                    </Button> */}
                                </Card.Body>
                            </div>

                        </Card>

                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                        >
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <Card.Body key={post._id}>
                                    <Card.Img className='card-image' variant="top" src={post.image} />
                                    <Card.Title>{post.title}</Card.Title>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>{post.languaje}</ListGroupItem>
                                        <ListGroupItem>{post.gender}</ListGroupItem>
                                        <ListGroupItem>{post.date}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Text>
                                        {post.synopsis}
                                    </Card.Text>
                                </Card.Body>
                            </Modal.Body>
                        </Modal>
                    </div>
                ))
                }
            </MainPage >
        </>
    );
}

export default PostsList;