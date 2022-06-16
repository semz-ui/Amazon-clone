import { useState } from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
import CaroselBody from "./CaroselBody";
import { datas } from "./data";

function Home() {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Header onChange={onChange} />
      <div className="home">
        <CaroselBody />
        <div className="hdot"></div>
        <div className="home__row">
          {datas
            .filter((data) => {
              if (query === "") {
                //if query is empty
                return data;
              } else if (
                data.title.toLowerCase().includes(query.toLowerCase())
              ) {
                //returns filtered array
                return data;
              }
            })
            .slice(0, 2)
            .map((data) => (
              <Product key={data.id} data={data} />
            ))}
        </div>
        <div className="home__row">
          {datas
            .filter((data) => {
              if (query === "") {
                //if query is empty
                return data;
              } else if (
                data.title.toLowerCase().includes(query.toLowerCase())
              ) {
                //returns filtered array
                return data;
              }
            })
            .slice(2, 5)
            .map((data) => (
              <Product key={data.id} data={data} />
            ))}
        </div>
        <div className="home__row">
          {datas
            .filter((data) => {
              if (query === "") {
                //if query is empty
                return data;
              } else if (
                data.title.toLowerCase().includes(query.toLowerCase())
              ) {
                //returns filtered array
                return data;
              }
            })
            .slice(5)
            .map((data) => (
              <Product key={data.id} data={data} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
