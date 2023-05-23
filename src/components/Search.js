import React, { useState, useEffect } from "react";
import "./search.css";

function Search() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredResults = data.filter((item) =>
      item.PointTemplateName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div class="search-container">
      <input
        className="search"
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleSearch}
      />
      <i class="fa fa-search"></i>
    </div>
  );
}

export default Search;
