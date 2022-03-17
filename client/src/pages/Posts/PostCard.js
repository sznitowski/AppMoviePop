import { useEffect, useState, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Card, ListGroup, ListGroupItem, Row, Col, Button, PageItem, Modal } from "react-bootstrap";
import './PostCard.css'
import MainPage from "../../components/MainPage";
import axios from "axios";

function PostCard() {
    const [show, setShow] = useState(false);
    const [posts, setPosts] = useState([])
    const [getPostById, setGetPostById] = useState([])
    async function getAllData() {
        try {
            const { data } = await axios.get("/api/posts");
            setPosts(data.data);
        } catch (err) {
        }
    }
    const getDataById = async (id) => {
        console.log(id)
        if (id) {
            try {
                const data = await axios.get(`/api/posts/${id}`);
                setGetPostById(data.data);
            } catch (err) {
            }
        }
    }
    useEffect(() => {
        getAllData();
        getDataById();
        setShow();
    }, [])

    return (
        <MainPage title='Película'>
            {getPostById && posts.map(post => (
                <div /* onClick={() => (getDataById(post._id))} */ className="main-card-container">
                    <div className="card-body" key={post._id}>
                    
                        <img className='card-image' variant="top" src={post.image} />
                        <h2>{post.title}</h2>
                    </div>
                    <Button key={post._id} variant="primary" onClick={() => (getDataById(setShow(true)))}>
                        Ir a...
                    </Button>

                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
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
    );
}

export default PostCard;


