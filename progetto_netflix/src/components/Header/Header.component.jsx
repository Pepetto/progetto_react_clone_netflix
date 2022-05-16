import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header () {
    return (
            <>
                <Container fluid> 
                    <Row className="header-image altezza align-items-end  text-start"> 
                        <Col> 
                            <Row className="mt-3" >
                                <img className="img-fluid" src="" alt="QUALCOSA" />
                                <div>
                                    <h1>Film, serie TV e tanto altro. Senza limiti.</h1>
                                </div>
                                <div>
                                    <h2 className="mt-5">Guarda ciò che vuoi ovunque. Disdici quando vuoi.</h2>
                                </div>
                            </Row>
                            <Card.Body className="header-color">
                            <div className="mt-5">
                                <div>
                                    <h3 className="mt-5">Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento.</h3>
                                </div>
                                <div>
                                    <input type='e-mail' className="w-25" ></input>
                                    <Link to="/login" className="btn btn-danger"> Click </Link>     
                                </div>
                            </div>
                            </Card.Body> 
                        </Col>
                    </Row>
                    <Row className="mt-5 pt-5 altezza">
                        <Col>
                            <img  className="img-fluid" src="../../img/35228.jpg" alt="QUALCOSA" />
                        </Col>
                        <Col className="text-start ms-5 fs-4">
                            <div>
                                <h2>Guarda come, quando e con chi vuoi</h2>
                            </div>
                            <div className=" mt-5">
                                <div>
                                    <p>Organizza una visone di gruppo con Groupwatch. Metti in pausa,riavvolgi e interagisci con un massimo di sei persone. Per partecipare è necessario un abbonamento attivo.</p>
                                </div>
                                <div>
                                    <p>Scarica qualsiasi serie o film e guardali dove vuoi</p>
                                </div>
                                <div>
                                    <p>Grazie ad un affidabile parental control, tutti potranno guardare i titoli con la massima tranquillità</p>
                                </div>
                                <div>
                                    <p>Per accedere a tutto l'incredibile catalogo STAR imposta la classificazione del tuo profilo su 18+.</p>
                                </div>
                            </div>
                        </Col>
                        <div>
                        <Link to="" className="btn btn-info mt-5 mb-5 w-25 h-25 fs-2" >Abbonati</Link>
                        </div>
                    </Row>
                    <h2>Disponibile sui tuoi dispositivi preferiti</h2>
                    <Row xxl={4} xl={4} lg={4} md={2} sm={1} xs={1} className="mt-5">
                        
                        <Col>
                        <img className="img-fluid" src="../../img/original.png" alt="TV" />
                           <h3>Amazon Fire TV Dispositivi con Android TV Apple TV Chromecast TV LG Samsung </h3>
                        </Col>
                        <Col>
                            <img className="img-fluid" src= "../../img/original1.png" alt="PC" />
                            <h3>Chrome OS MacOS PC Windows</h3>
                        </Col>
                        <Col>
                            <img className="img-fluid" src="../../img/original2.png" alt="Tablet" />
                            <h3>Tablet Amazon Fire Telefoni e tablet Android iPhone e iPad</h3>
                        </Col>
                        <Col>
                            <img className="img-fluid" src="img/original3.png" alt="Consol" />
                            <h3>PS4 PS5 Xbox One Xbox Series X Xbox Series S</h3>
                        </Col>
                    </Row>
                </Container>
            </>
    )
}