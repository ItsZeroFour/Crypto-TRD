import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cryptocoins = () => {
  const [cryptoCoins, setCryptoCoins] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    function getCryptocoins() {
      try {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "d7ec407c8cmsha5cbdaf4e498df1p1cb349jsn9866abb54b96",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          },
        };

        fetch(
          "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=5&offset=0",
          options
        )
          .then((response) => response.json())
          .then((response) => setCryptoCoins(response))
          .catch((err) => {
            console.error(err);
          });
      } catch (err) {
        console.log(err);
      }
    }

    getCryptocoins();
  }, []);

  return (
    <div className="cryptocoins">
      {Object.keys(cryptoCoins).length !== 0 ? (
        <div className="cryptocoins__container">
          <div className="cryptocoins__header">
            <h4>Top 5 Crypto in {year}</h4>
            <Link to="top_cryptocurrency">See All</Link>
          </div>

          <ul className="cryptocoins__list">
            {cryptoCoins.data.coins.map((data) => (
              <li className="cryprocoins__item" key={data.uuid}>
                <div className="cryprocoins__item-left">
                  <img src={data.iconUrl} alt={data.name} />
                  <h4>
                    {data.name} ({data.symbol})
                  </h4>
                </div>

                <div className="cryprocoins__item-right">
                  <h4>${Number(data.price).toFixed(2)}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="placeholder"></div>
      )}
    </div>
  );
};

export default Cryptocoins;
