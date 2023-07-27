import { Button, Card, Form } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VehicleService from "../../services/VehicleService";

const VehicleAddPage = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState({});
  

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setBrands((values) => ({ ...values, [name]: value }));
  };

  const handleVehicleServiceCreate = () => {
    VehicleService.create(brands).then((response) => {
      alert("vehicle berhasil ditambahkan.");
      navigate("/vehicle");
    });
  };

  return (
    <NavigationWidget
      actionTop={
        <>
          <Button className="me-2" variant="secondary" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Kembali
          </Button>
          <Button onClick={handleVehicleServiceCreate}>
            <FaSave /> Simpan
          </Button>
        </>
      }
    >
      <Card>
        <Card.Header>
          <h5>Add Vehicle</h5>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mt-3">
            <Form.Label>Vehicle Name</Form.Label>
            <Form.Control name="vehicle_name" value={brands.vehicle_name || ""} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control name="brand" value={brands.brand || ""} onChange={handleInput}/>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Year</Form.Label>
            <Form.Control name="year" value={brands.year || ""} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Price</Form.Label>
            <Form.Control name="price" value={brands.price || ""} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Create At</Form.Label>
            <Form.Control name="create_at" value={brands.create_at || ""} onChange={handleInput} type="date" />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Update At</Form.Label>
            <Form.Control name="update_at" value={brands.update_at || ""} onChange={handleInput} type="date" />
          </Form.Group>
        </Card.Body>
      </Card>
    </NavigationWidget>
  );
};

export default VehicleAddPage;
