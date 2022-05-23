import Profilo from "../../components/Profilo/Profilo.component";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "../SceltaProfilo/SceltaProfilo.page.css";

function SceltaProfilo() {
  return (
    <div className="accedi">
      <Container>
      <Row>
          <Col>
            <img
              className="img-fluid"
              src={require("./text.png")}
              alt="Logo"
              width={100}
              height={100}
            />
          </Col>
          </Row>
      </Container>
    <div className="accedi">
      <Container>
        

        <Row className="margin">
          <h1>Chi sta guardando?</h1>
        </Row>

        <Row>
          <Col>
            <Profilo
              name="Adinolfi"
              img="https://i.pinimg.com/736x/a3/46/be/a346bedc9c50e1776da06cf85158d528.jpg"
              className="immagine-layout"
            />
          </Col>
          <Col>
            <Profilo
              name="Roberto"
              img="https://i.pinimg.com/originals/96/21/65/96216524958973ceffb8b7a2f29c9110.png"
              className="immagine-layout"
            />
          </Col>
          <Col>
            <Profilo
              name="Gianluca"
              img="https://plantillasdememes.com/img/plantillas/mike-wazowski-con-cara-de-sullivan01578859264.jpg"
              className="immagine-layout"
            />
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}
export default SceltaProfilo;
