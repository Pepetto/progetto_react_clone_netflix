import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header () {
    return (
            <>
                <Container> 
                    <Row className="header-image "> 
                        <Col> 
                            <Row >
                                <Col className="d-flex justify-content-start">
                                    <img src="https://react-bootstrap.github.io/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Link className="btn btn-primary" to="/login">Login</Link>
                                </Col>
                            </Row>
                            <Card.Body className="header-color">
                            <div className="mt-5 bg bg-dark bordo">
                                <div>
                                    <h1 >Film, serie TV e tanto altro. Senza limiti.</h1>
                                </div>  
                                <div>
                                    <h2 className="mt-3">Guarda ciò che vuoi ovunque. Disdici quando vuoi.</h2>
                                </div>
                                <div>
                                    <h3 className="mt-3">Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento.</h3>
                                </div>
                                <div>
                                    <input type='e-mail' ></input>
                                    <Link to="/login" className="btn btn-danger"> Click </Link>     
                                </div>
                            </div>
                            </Card.Body> 
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="prova">
                            {/* <img src="/src/img/35228.jpg" alt="QUALCOSA" /> */}
                        </Col>
                        <Col>
                            <div>
                                <h2>Guarda come, quando e con chi vuoi</h2>
                            </div>
                            <div className="text-start">
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
                        <Link to="" className="btn btn-info mt-5 mb-5" >Abbonati</Link>
                        </div>
                    </Row>
                    <h2>Disponibile sui tuoi dispositivi preferiti</h2>
                    <Row xxl={4} xl={4} lg={4} md={2} sm={1} xs={1} >
                        
                        <Col>
                        <img src="img/original.png" alt="original" />
                           <h3>Amazon Fire TV Dispositivi con Android TV Apple TV Chromecast TV LG Samsung </h3>
                        </Col>
                        <Col>
                            <h3>Chrome OS MacOS PC Windows</h3>
                        </Col>
                        <Col>
                            <h3>Tablet Amazon Fire Telefoni e tablet Android iPhone e iPad</h3>
                        </Col>
                        <Col>
                            <h3>PS4 PS5 Xbox One Xbox Series X Xbox Series S</h3>
                        </Col>
                    </Row>
                </Container>
            </>
    )
}