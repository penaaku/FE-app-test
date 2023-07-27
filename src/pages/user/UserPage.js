import { Button, Card, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { useState, useEffect } from "react";
import UserService from "../../services/UserService";

const UserPage = () => {
  const [daftarUser, setDaftarUser] = useState({});

  useEffect(() => {
    UserService.list(daftarUser)
      .then((response) => {
        setDaftarUser(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <NavigationWidget>
      <Card className="mt-2">
        <Card.Header className="bg-secondary text-light">
          <h5>Users</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Nama Lengkap</th>
            </tr>
          </thead>
          <tbody>
            {daftarUser.results &&
              daftarUser.results.map((user, index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.nama_lengkap}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default UserPage;
