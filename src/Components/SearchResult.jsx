import React from "react";

const SearchResult = ({ myResult }) => {
  return (
    <>
      <div className="search-menu">
        {myResult.map((item, index) => {
          return (
            <div className="my-card" key={index}>
              <img src={item.image_link} alt={item.name} />
              <div className="owerlay">
                <h5>{item.name} </h5>
                <p>{item.brand}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
