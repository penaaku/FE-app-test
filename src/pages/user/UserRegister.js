import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useState } from "react";

const UserRegister = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleUserServiceCreate = () => {
    UserService.create(user).then((response) => {
      alert("User berhasil ditambahkan.");
      navigate("/login");
    });
  };

  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={4}>
            <div className="d-flex justify-content-center">
              <h2>Register</h2>
            </div>
            <Card className="mt-3">
              <Card.Body>
                <Form.Group className="my-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    value={user.email || ""}
                    onChange={handleInput}
                    required // Tambahkan atribut required
                    type="email" // Tambahkan tipe email untuk validasi
                    placeholder="Masukan email..."
                  />
                </Form.Group >
                <Form.Group className="my-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" value={user.password || ""} onChange={handleInput} type="password" placeholder="Masukan password..." required />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control name="nama_lengkap" value={user.nama_lengkap || ""} onChange={handleInput} placeholder="Masukan nama lengkap..." />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button onClick={handleUserServiceCreate}>Login</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserRegister;
