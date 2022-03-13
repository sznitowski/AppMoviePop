import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainPage from "../../components/MainPage";
import { Button, Table } from "react-bootstrap";
import axios from "axios";


function PostCard() {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.get('/api/posts', config);
        setUsers(data.data)
        console.log(data)
    }
    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <>
            <MainPage title='Welcome'>
                <Link to="user">
                </Link>
                <Table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>image</th>
                            <th>actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* {loading && <Loader />}
                        {error && <ErrorMessage variant='danger'>
                            {error}</ErrorMessage>} */}

                        {users && users.map(user => (
                            <>
                                <tr key={user.id}>
                                    <td>{user.title}</td>
                                    <td>{user.image}</td>                        

                                </tr>
                            </>
                        )
                        )}

                    </tbody>
                </Table>

            </MainPage >
        </>
    );

}

export default PostCard;