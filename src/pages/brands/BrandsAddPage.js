import { Button, Card, Form } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BrandsService from "../../services/BrandsService";

const BrandsAddPage = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState({});
  

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setBrands((values) => ({ ...values, [name]: value }));
  };

  const handleBrandsServiceCreate = () => {
    BrandsService.create(brands).then((response) => {
      alert("brands berhasil ditambahkan.");
      navigate("/brands");
    });
  };

  return (
    <NavigationWidget
      actionTop={
        <>
          <Button className="me-2" variant="secondary" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Kembali
          </Button>
          <Button onClick={handleBrandsServiceCreate}>
            <FaSave /> Simpan
          </Button>
        </>
      }
    >
      <Card>
        <Card.Header>
          <h5>Add Brands</h5>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mt-3">
            <Form.Label>ID Brands</Form.Label>
            <Form.Control name="ID_Brands" value={brands.ID_Brands || ""} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Brand Foto</Form.Label>
            <Form.Control name="brand_foto" value={brands.brand_foto || ""} onChange={handleInput}/>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control name="brand_name" value={brands.brand_name || ""} onChange={handleInput} />
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

export default BrandsAddPage;
