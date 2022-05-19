import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar.component";
import { Container, Row } from "react-bootstrap";
import SearchBox from "../../components/SearchBox/SearchBox.component";
import "./searchlist.scss";

//
export default function SearchList() {
  return (
    <>
      <Container fluid className="text-center bg bg-dark">
        <Row>
          <MyNavbar />
          <SearchBox />
        </Row>
      </Container>
    </>
  );
}
