import React, {Component} from "react";
import "./Login.css" ;
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login () {
    return (
        <>
         <Container>
             <Row>
                 <Col>
                 {/* <div class="filter"></div> */}
                    <div class="container">
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
                    </div>
                 </Col>
             </Row>
         </Container>
        </>
    )

}