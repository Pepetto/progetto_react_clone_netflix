import React, {Component} from "react";
import "./Register.style.scss";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register () {
    return (
        <>
            <Container fluid className="sfondoregister">
                 <Row className="justify-content-center">
                     <Col className="d-flex justify-content-center mt-5">
                        <Card className="cardRegister text-center">
                            <Card.Title>
                                <h1 className="mt-3">Registrati</h1>
                            </Card.Title>
                            <Card.Body className=" d-flex justify-content-center mt-3" >
                                <form className="w-50">
                                    <div className="mb-3">
                                        <label className="form-label">Usurname</label>
                                        <input type="text" className="form-control" />

                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">Password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">Repeat Password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <Link to="/home" type="submit" className="btn btn-primary">Submit</Link>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )

}