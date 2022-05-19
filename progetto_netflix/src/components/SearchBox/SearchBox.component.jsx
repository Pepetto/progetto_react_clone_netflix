import React, { useState } from "react";
import { Search } from "@material-ui/icons";

import CardItem from "../CardItem/CardItem.component";
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
    <div>
      <form onSubmit={searchElement}>
        <input type="text" onChange={(e) => setSearchField(e.target.value)} />
        <button type={"submit"}>
          <Search />
        </button>
      </form>

      {resultList.map((element) => (
        <CardItem list={element} />
      ))}

      {/* <SearchList results={resultList} /> */}
    </div>
  );
}
