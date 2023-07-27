import { Button, Card, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import VehicleService from "../../services/VehicleService";
import { BsBagPlusFill } from "react-icons/bs";

const VehiclePage = () => {
  const navigate = useNavigate();
  const [daftarvehicle, setDaftarVehicle] = useState({});

  useEffect(() => {
    VehicleService.list(daftarvehicle)
      .then((response) => {
        setDaftarVehicle(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <NavigationWidget
      buttonCreate={
        <Button onClick={() => navigate("/vehicle/add")}>
          <VscAdd /> Add
        </Button>
      }
    >
      <Card className="mt-2">
        <Card.Header className="bg-secondary text-light">
          <h5>Vehicle</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Vehicle Name</th>
              <th>Brand</th>
              <th>Year</th>
              <th>Price</th>
              <th>Create At</th>
              <th>Update At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {daftarvehicle.results &&
              daftarvehicle.results.map((vehicle, index) => (
                <tr key={index}>
                  <td>{vehicle.vehicle_name}</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.year}</td>
                  <td>{vehicle.price}</td>
                  <td>{vehicle.create_at}</td>
                  <td>{vehicle.update_at}</td>
                  <td>
                    <Button onClick={() => Navigate("/vehicle/add")}>
                      <BsBagPlusFill /> Buy
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default VehiclePage;
