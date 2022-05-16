import React, {Component} from "react";
import "./Login.css" ;
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login () {
    return (
        <>
         <Container fluid className="sfondologin">
             <Row>
                 <Col className="d-flex justify-content-center mt-5">
                    <Card className="cardLogin">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </Card>
                 </Col>
             </Row>
         </Container>
        </>
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