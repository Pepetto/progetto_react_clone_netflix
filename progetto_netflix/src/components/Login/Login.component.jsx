import React, {Component} from "react";
import "./Login.css" ;
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login () {
    return (
        <div>
            <Container fluid className="sfondologin">
                 <Row className="justify-content-center">
                     <Col className="d-flex justify-content-center mt-5">
                        <Card className="cardLogin text-center">
                            <Card.Title>
                                <h1 className="mt-3">Accedi</h1>
                            </Card.Title>
                            <Card.Body className=" d-flex justify-content-center mt-3" >
                                <form className="w-50">
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">Password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <Link to="/profilo" type="submit" className="btn btn-primary">Submit</Link>
                                </form>
                            </Card.Body>
                            <h5 className="mb-3">Prima volta su Netflex? </h5>
                            <Link to="/register" className="mb-5" >Registrati</Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}


{/* <div class="container">
<div class="title">REGISTRATI</div>
<form method="post">
    <div class="user-details">
        <div class="input-box">
            <label for="text" class="details">User</label>
            <input type="text" placeholder="User"/>
        </div>
        <div class="input-box">
        <label for="Email" class="details">Email</label>
        <input type="email" placeholder="marcorossi@email.com" />
        </div>
        <div class="input-box">
        <label class="details">Password</label>
        <input type="password"placeholder="Password"/>
        </div>
        <div class="button">
            <input type="button" value="Invia"/>
        </div>
    </div>
</form>
</div> */}