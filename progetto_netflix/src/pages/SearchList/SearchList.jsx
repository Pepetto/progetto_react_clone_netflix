import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar.component";
import SearchBox from "../../components/SearchBox/SearchBox.component";
import "./searchlist.scss";

//
export default function SearchList({ resultList }) {
  return (
    <div className="page">
      <div className="contenitore">
        <MyNavbar />
        <SearchBox />
      </div>
    </div>
  );
}
