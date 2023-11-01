import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderSearch = ({ getSearchParams }) => {
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    Navigate("/shop-grid-standard");
    getSearchParams(search);
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="Submit" className="button-search">
          <i className="pe-7s-search" />
        </button>
      </form>
    </div>
  );
};

export default HeaderSearch;
