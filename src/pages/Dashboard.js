import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Dashboard = () => {
  // Estado para almacenar la hora de llegada
  const [horaLlegada, setHoraLlegada] = useState(null);

  // Función que se llama al hacer clic en el botón
  const registrarHora = () => {
    const horaActual = new Date();
    setHoraLlegada(horaActual.toLocaleTimeString()); // Formato: hh:mm:ss
  };

  return (
    <div className="dashboard">
      <Row>
        <Col md={12} className="text-center">
          <Card>
            <Card.Body>
              <Card.Title>Bienvenido al Sistema de Control de Acceso</Card.Title>
              <Card.Text>
                Haga clic en el botón para registrar su hora de llegada.
              </Card.Text>
              <Button onClick={registrarHora} variant="primary">
                Registrar Hora de Llegada
              </Button>

              {horaLlegada && (
                <div style={{ marginTop: '20px' }}>
                  <h5>Hora de llegada registrada: {horaLlegada}</h5>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
