import React from "react";
import { Button, Card, Col, Container, Row, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AccordionLanding () {
    return  <>
                <Container>
                <Row>
                    <h2>Domande frequenti</h2>
                    <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" className="text-start"  >
                            <Accordion.Header>Che cos'è NETFLEX</Accordion.Header>
                            <Accordion.Body>
                            Disney è la casa dello streaming per l'intrattenimento di Disney, Pixar, Marvel, Star Wars, National Geographic, Star e molto altro. Disney+ offre vari vantaggi inclusi nel prezzo di abbonamento standard: <br/>
                            • Originals in esclusiva che non trovi da nessuna altra parte, film di grande successo, show da maratona, corti sfiziosi e documentari d'ispirazione <br/>
                            • Download multipli su un massimo di 10 dispositivi e fino a 7 profili diversi <br/>
                            • Streaming in formato 4K UHD con Dolby Vision and Dolby Atmos sui dispositivi compatibili senza costi aggiuntivi
                            • Un affidabile parental control con appositi profili bambini <br/>
                            • La possibilità di guardare su un massimo di 4 schermi contemporaneamente <br/>
                            • La possibilità di organizzare visioni di gruppo per un massimo di 5 amici, abbonati a Disney+, con GroupWatch
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                </Container>
            </>
}