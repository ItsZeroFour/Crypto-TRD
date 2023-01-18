import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopCryptocurrency = ({ setGetInputValue }) => {
  const year = new Date().getFullYear();
  const [cryptoCoins, setCryptoCoins] = useState({});

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
          "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
          options
        )
          .then((response) => response.json())
          .then((response) => setCryptoCoins(response.data.coins))
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
    <div className="top_cryptocurrency">
      {Object.keys(cryptoCoins).length !== 0 ? (
        <div className="top_cryptocurrency__container">
          <h2>Top Cryptocurrency in {year}</h2>

          <ul className="top_cryptocurrency__list">
            {cryptoCoins.map((data) => (
              <li className="top_cryptocurrency__item" key={data.uid}>
                <Link
                  to="/Crypto-TRD"
                  onClick={() =>
                    setGetInputValue(
                      data.name.toLowerCase().split(" ").join("")
                    )
                  }
                >
                  <div className="top_cryptocurrency__item-header">
                    <h3>
                      {data.rank}. {data.name} ({data.symbol})
                    </h3>
                    <img src={data.iconUrl} alt={data.name} />
                  </div>

                  <div className="top_cryptocurrency__item-main">
                    <h3>Market Cap: {millify(data.marketCap)}</h3>
                    <h3>Price: {millify(data.price)} $</h3>
                    <h3>Daily Change: {millify(data.change)} %</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="box">
          <div className="fading-lines"></div>
        </div>
      )}
    </div>
  );
};

export default TopCryptocurrency;
