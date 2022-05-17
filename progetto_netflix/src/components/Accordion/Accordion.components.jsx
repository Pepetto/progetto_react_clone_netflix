import React from "react";
import { Button, Card, Col, Container, Row, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AccordionLanding () {
    return  <>
                <Container className="mt-5 mb-3 altezzaHeader">
                <Row>
                    <h2>Domande frequenti</h2>
                    <Col className="mt-5">
                    <Accordion className="text-start">
                        <Accordion.Item eventKey="0" className="bg bg-dark">
                            <Accordion.Header >Che cos'è NETFLEX?</Accordion.Header>
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
                        <Accordion.Item eventKey="1" className="bg bg-dark">
                            <Accordion.Header>Cosa posso guardare su NETFLEX?</Accordion.Header>
                            <Accordion.Body>
                            • Gli ultimi successi live action e di animazione come Raya e l'Ultimo Drago <br/>
                            • Appassionanti storie per tutte le età dai creatori Pixar, come l'imperdibile avventura estiva ambientata in Italia, Luca<br/>
                            • Vivi l'evolversi del Marvel Cinematic Universe con le imperdibili serie Originali dei Marvel Studios - WandaVision, The Falcon and The Winter Soldier e Loki<br/>
                            • Rivivi l'epica saga degli Skywalker o guarda la prima serie live action di Star Wars, The Mandalorian<br/>
                            • Saziati della bellezza del nostro pianeta con gli intrepidi esploratori di National Geographic e con tanti interessanti documentari<br/>
                            • Su Star trovi le serie da maratona di cui tutti parlano, come la stagione finale in esclusiva del fenomeno globale The Walking Dead<br/>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="bg bg-dark">
                            <Accordion.Header>Quanto costa NETFLEX?</Accordion.Header>
                            <Accordion.Body>
                            L'abbonamento Netflex costa 8,99 € al mese. In alternativa risparmia quasi 2 mesi con l'abbonamento annuale a 89,90 €*.<br/>
                            Puoi anche acquistare un abbonamento annuale a Netflex da regalare a qualcun altro, qui.<br/>
                            *Risparmio calcolato rispetto all’abbonamento mensile. Risparmio di “quasi” due mesi per un arrotondamento di 0,10 €<br/>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="bg bg-dark">
                            <Accordion.Header>Quali sono i dispositivi supportati?</Accordion.Header>
                            <Accordion.Body>
                            Netflex supporta dispositivi mobili, browser web, console di gioco, set-top box e smart TV. Clicca qui per consultare la lista completa.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="bg bg-dark">
                            <Accordion.Header>Registrandomi a NETFLEX mi assumo qualche impegno senza possibilità di disdetta?</Accordion.Header>
                            <Accordion.Body>
                            Non ci sono impegni a tempo indeterminato e puoi disdire quando vuoi, con validità a decorrere dal termine del periodo di fatturazione. Ti basta seguire questi 5 semplici passaggi:<br/>
                            1. Vai su www.disneyplus.com e accedi<br/>
                            2. Seleziona il tuo Profilo<br/>
                            3. Seleziona Account<br/>
                            4. Seleziona Disdici abbonamento<br/>
                            5. Seleziona Completa la disdetta per confermare<br/>
                            Per maggiori informazioni clicca qui.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                </Container>
            </>
}