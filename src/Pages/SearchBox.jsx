import React, { useState } from "react";

const SearchBox = ({setMyResult}) => {

  const fetchData = (value) => {
    fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then(data=> data.json())
      .then(res => {
        const result = res.filter((user) => {
          return user.name.toLowerCase().includes(value);
        });
        setMyResult(result)
      });
  };

  const handleChange = (value) => {
    fetchData(value);
  };
  const [opn, setOpn] = useState(false)
  const searchBar = () =>{
    setOpn((variable)=> !variable)
  }

  return (
    <>
      <section id="searchBox">
        <div className="search-container">
         <form>
         <input
            className= {opn ? "" : "close-search"}
            type="text"
            placeholder="Search Here"
            onChange={(e) => handleChange(e.target.value)}/>
            <i className={opn ? "fa-solid fa-xmark rot" : "fa-solid fa-plus"} onClick={searchBar}></i>
         </form>
        </div>
      </section>
    </>
  );
};

export default SearchBox;
