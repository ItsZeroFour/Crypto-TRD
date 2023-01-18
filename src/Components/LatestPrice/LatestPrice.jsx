import React from "react";

const OrderHistory = ({ fullData }) => {
  return (
    <div className="latestPrice">
      {fullData ? (
        <div className="latestPrice__container">
          <ul className="latestPrice__list">
            <li className="latestPrice__item">
              <h3>Latest Cryptocurrency Rates</h3>
            </li>
            <li className="latestPrice__item">
              <h4
                style={
                  // If Prev price < current price - red color else green color
                  fullData.prices[fullData.prices.length - 1][1].toFixed(2) <
                  fullData.prices[fullData.prices.length - 2][1].toFixed(2)
                    ? { backgroundColor: "#ea4b46" }
                    : { backgroundColor: "#4bb677" }
                }
              >
                $ {fullData.prices[fullData.prices.length - 1][1].toFixed(2)}
              </h4>
            </li>

            <li className="latestPrice__item">
              <h4
                style={
                  // If Prev price < current price - red color else green color
                  fullData.prices[fullData.prices.length - 2][1].toFixed(2) <
                  fullData.prices[fullData.prices.length - 3][1].toFixed(2)
                    ? { backgroundColor: "#ea4b46" }
                    : { backgroundColor: "#4bb677" }
                }
              >
                $ {fullData.prices[fullData.prices.length - 2][1].toFixed(2)}
              </h4>
            </li>

            <li className="latestPrice__item">
              <h4
                style={
                  // If Prev price < current price - red color else green color
                  fullData.prices[fullData.prices.length - 3][1].toFixed(2) <
                  fullData.prices[fullData.prices.length - 4][1].toFixed(2)
                    ? { backgroundColor: "#ea4b46" }
                    : { backgroundColor: "#4bb677" }
                }
              >
                $ {fullData.prices[fullData.prices.length - 3][1].toFixed(2)}
              </h4>
            </li>

            <li className="latestPrice__item">
              <h4
                style={
                  // If Prev price < current price - red color else green color
                  fullData.prices[fullData.prices.length - 4][1].toFixed(2) <
                  fullData.prices[fullData.prices.length - 5][1].toFixed(2)
                    ? { backgroundColor: "#ea4b46" }
                    : { backgroundColor: "#4bb677" }
                }
              >
                $ {fullData.prices[fullData.prices.length - 4][1].toFixed(2)}
              </h4>
            </li>

            <li className="latestPrice__item">
              <h4
                style={
                  // If Prev price < current price - red color else green color
                  fullData.prices[fullData.prices.length - 5][1].toFixed(2) <
                  fullData.prices[fullData.prices.length - 6][1].toFixed(2)
                    ? { backgroundColor: "#ea4b46" }
                    : { backgroundColor: "#4bb677" }
                }
              >
                $ {fullData.prices[fullData.prices.length - 5][1].toFixed(2)}
              </h4>
            </li>

            <li className="latestPrice__item">
              <h4
                style={
                  // If Prev price < current price - red color else green color
                  fullData.prices[fullData.prices.length - 6][1].toFixed(2) <
                  fullData.prices[fullData.prices.length - 7][1].toFixed(2)
                    ? { backgroundColor: "#ea4b46" }
                    : { backgroundColor: "#4bb677" }
                }
              >
                $ {fullData.prices[fullData.prices.length - 6][1].toFixed(2)}
              </h4>
            </li>

            <li className="latestPrice__item">
              <h4
                style={
                  // If Prev price < current price - red color else green color
                  fullData.prices[fullData.prices.length - 7][1].toFixed(2) <
                  fullData.prices[fullData.prices.length - 8][1].toFixed(2)
                    ? { backgroundColor: "#ea4b46" }
                    : { backgroundColor: "#4bb677" }
                }
              >
                $ {fullData.prices[fullData.prices.length - 7][1].toFixed(2)}
              </h4>
            </li>

            <li className="latestPrice__item">
              <h4
                style={
                  // If Prev price < current price - red color else green color
                  fullData.prices[fullData.prices.length - 8][1].toFixed(2) <
                  fullData.prices[fullData.prices.length - 9][1].toFixed(2)
                    ? { backgroundColor: "#ea4b46" }
                    : { backgroundColor: "#4bb677" }
                }
              >
                $ {fullData.prices[fullData.prices.length - 8][1].toFixed(2)}
              </h4>
            </li>

            <li className="latestPrice__item">
              <h4
                style={
                  // If Prev price < current price - red color else green color
                  fullData.prices[fullData.prices.length - 9][1].toFixed(2) <
                  fullData.prices[fullData.prices.length - 10][1].toFixed(2)
                    ? { backgroundColor: "#ea4b46" }
                    : { backgroundColor: "#4bb677" }
                }
              >
                $ {fullData.prices[fullData.prices.length - 9][1].toFixed(2)}
              </h4>
            </li>
          </ul>
        </div>
      ) : (
        <div className="placeholder"></div>
      )}
    </div>
  );
};

export default OrderHistory;
