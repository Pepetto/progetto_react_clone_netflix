import React, { useState } from "react";
import { Search } from "@material-ui/icons";
import { Row, Col, Form, Button } from "react-bootstrap";

import CardItem from "../CardItem/CardItem.component";
import { Container } from "react-bootstrap";
import { Input } from "@mui/material";
const axios = require("axios").default;

export default function SearchBox() {
  const [resultList, SetResultList] = useState([]);
  const [searchField, setSearchField] = useState("");
  const BACKEND_URL = "http://localhost:2000";

  // Cerca tra film,serie tv e attori passando il nome preso in input
  const searchElement = async (e) => {
    e.preventDefault();
    await axios
      .get(`${BACKEND_URL}/search/multi`, {
        params: {
          query: searchField,
        },
      })
      .then((results) => SetResultList(results.data));
  };

  console.log(resultList);

  return (
    <div className="mt-5">
      <Form onSubmit={searchElement}>
        <Input
          className="text-light"
          type="text"
          onChange={(e) => setSearchField(e.target.value)}
        />
        <Button type={"submit"} className="rounded-circle bg bg-dark border-0">
          <Search className="bg bg-dark  " />
        </Button>
      </Form>
      <Container className="mb-5">
        <Row className="mt-5">
          {resultList.map((element) => (
            <Col xxl={3} xl={4} lg={4} md={6} sm={6} xs={6} className="mt-5">
              <CardItem className="" list={element} />
            </Col>
          ))}
        </Row>
      </Container>
      {/* <SearchList results={resultList} /> */}
    </div>
  );
}
