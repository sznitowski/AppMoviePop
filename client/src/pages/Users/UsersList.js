import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainPage from "../../components/MainPage";
import { Table } from "react-bootstrap";
import axios from "axios";

function UsersList() {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.get('/api/users', config);
        setUsers(data.data)
        console.log(data)
    }
    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <>
            <MainPage title='Lista de usuarios'>

                <Link to="user">
                </Link>
                <Table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users && users.map(user => (
                            <>
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
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

export default UsersList;