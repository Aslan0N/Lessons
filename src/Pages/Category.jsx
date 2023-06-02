import axios from "axios";
import React, {  useState } from "react";
import { BarLoader } from "react-spinners";

const Category = () => {
  const [data, setData] = useState([]);
  const allCategory = [
    "All",
    "national",
    "business",
    "sports",
    "world",
    "politics",
    "technology",
    "startup",
    "entertainment",
    "miscellaneous",
    "hatke",
    "science",
    "automobile",
  ];
  const fetchValue = (category) => {
    axios.get(` https://inshorts.deta.dev/news?category=${category}`)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      });
    setLoading(true);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openMenu = (value) => {
    setIsOpen((value) => !value);
  };

  return (
    <>
        <ul className={isOpen ? "media-ul" : "media-ul translate"}>
          {allCategory.map((item, index) => {
            return (
              <li key={index} onClick={() => fetchValue(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      <section id="category" className={loading? "flex": ''}>
        <button
        disabled={loading}
          onClick={openMenu}
          className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
        ></button>

        {loading ? 
          <div id="loader">
          <BarLoader color="red" />
          </div>
         : (
          <div className="container">
            <div className="row g-5">
              {data.map((item, index) => {
                return (
                  <div className="col-lg-4">
                    <div
                      className="card"
                      key={index}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <img
                        src={item.imageUrl}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.author}</h5>
                        <p className="card-text">
                        {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Category;
