import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header () {
    return (
            <>
                <Container>
                    
                    <Row> 
                        <Col> 
                            <Row >
                                <Col className="d-flex justify-content-start">
                                    <img src="https://react-bootstrap.github.io/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/> 
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Link className="btn btn-primary" to="/login">Login</Link>
                                </Col>
                            </Row>

                            <div className="mt-5">
                                <div >
                                    <h1>Film, serie TV e tanto altro. Senza limiti.</h1>
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
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <img src="" alt="QUALCOSA" />
                        </Col>
                        <Col>
                            <div>
                                <h2>Guarda come, quando e con chi vuoi</h2>
                            </div>
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
                        </Col>
                        <Link to="" className="btn btn-info " >Abbonati</Link>
                    </Row>
                </Container>
            </>
    )
}