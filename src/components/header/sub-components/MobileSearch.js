import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileSearch = ({ getSearchParms }) => {
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    Navigate("/shop-grid-standard");
    getSearchParms(search);
  };

  return (
    <div className="offcanvas-mobile-search-area">
      <form onSubmit={Submit}>
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="Submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
};

export default MobileSearch;
