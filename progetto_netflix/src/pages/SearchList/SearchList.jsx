import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox.component";
import "./searchlist.scss";

//
export default function SearchList({ resultList }) {
  return (
    <div className="page">
      <div className="contenitore">
        <SearchBox />
      </div>
    </div>
  );
}
