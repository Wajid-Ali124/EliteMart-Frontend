import { useState } from "react";



const ShopSearch = ({getSearchParams}) => {

  const [search, setSearch] = useState('');
  
  const Submit = (e)=>{
    e.preventDefault();
    getSearchParams(search)
  }

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Search </h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <form className="pro-sidebar-search-form" onSubmit={Submit}>
          <input type="text" placeholder="Search here..." value={search} onChange={(e)=>setSearch(e.target.value)} />
          <button type="submit">
            <i className="pe-7s-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
