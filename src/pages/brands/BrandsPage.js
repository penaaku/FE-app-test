import { Button, Card, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { useEffect, useState } from "react";
import BrandsService from "../../services/BrandsService";

const BrandsPage = () => {
  const navigate = useNavigate();
  const [daftarBrands, setDaftarBrands] = useState({});

  useEffect(() => {
    BrandsService.list(daftarBrands)
      .then((response) => {
        setDaftarBrands(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <NavigationWidget
      buttonCreate={
        <Button onClick={() => navigate("/brands/add")}>
          <VscAdd /> Add
        </Button>
      }
    >
      <Card className="mt-2">
        <Card.Header className="bg-secondary text-light">
          <h5>Brands</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID Brands</th>
              <th>Brand Foto</th>
              <th>Brand Name</th>
              <th>Create at</th>
              <th>Update_at</th>
            </tr>
          </thead>
          <tbody>
            {daftarBrands.results &&
              daftarBrands.results.map((brands, index) => (
                <tr key={index}>
                  <td>{brands.ID_Brands}</td>
                  <td>{brands.brand_foto}</td>
                  <td>{brands.brand_name}</td>
                  <td>{brands.create_at}</td>
                  <td>{brands.update_at}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default BrandsPage;
