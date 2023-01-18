import React, { useEffect, useState } from "react";
import TradeChart from "../../Components/Chart/TradeChart";
// Icons
import { FaChartArea } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import LatestPrice from "../../Components/LatestPrice/LatestPrice";
import Cryptocoins from "../../Components/Cryptocoins/Cryptocoins";
import Converter from "../../Components/LeftPanel/Converter/Converter";

const Main = ({ price, series, fullData, getInputValue, setDays }) => {
  // Saved chart type to localStorage
  const [changeChartType, setChangeChartType] = useState(() => {
    // Get item and paste into useState
    const getSavedChartType = localStorage.getItem("savedChartType");
    const initialValue = getSavedChartType;
    return initialValue || "area";
  });

  useEffect(() => {
    // SetItem to localStorage
    localStorage.setItem("savedChartType", changeChartType);
  }, [changeChartType]);

  console.log(changeChartType);

  return (
    <div>
      <section className="trade">
        <div className="trade__container">
          <div className="trade__info">
            <div className="trade__info-container" style={{ display: "flex" }}>
              {/* Cryptocoin Info */}
              <h4>
                <span
                  className={[
                    "price",
                    fullData.prices[fullData.prices.length - 1][1] >
                    fullData.prices[fullData.prices.length - 2][1]
                      ? "up"
                      : fullData.prices[fullData.prices.length - 1][1] <
                        fullData.prices[fullData.prices.length - 2][1]
                      ? "down"
                      : "",
                  ].join(" ")}
                >
                  ${price}
                </span>
              </h4>

              {/* Change Chart type SELECT */}
              <div className="trade__select-container">
                <span>
                  {changeChartType === "area" && <FaChartArea />}
                  {changeChartType === "line" && <BiLineChart />}
                  {changeChartType === "bar" && <AiOutlineBarChart />}
                </span>
                <select
                  className="trade__select"
                  onChange={(event) => {
                    setChangeChartType(event.target.value);
                    window.location.reload();
                  }}
                >
                  <option
                    className="trade__select-option"
                    value="area"
                    selected={changeChartType === "area"}
                  >
                    Area Chart
                  </option>
                  <option
                    className="trade__select-option"
                    value="line"
                    selected={changeChartType === "line"}
                  >
                    Brush chart
                  </option>
                  <option
                    className="trade__select-option"
                    value="bar"
                    selected={changeChartType === "bar"}
                  >
                    Bar Chart
                  </option>
                </select>
              </div>
            </div>

            {/* Desctop and Mobile menu (Change days) */}
            {window.screen.width > 775 ? (
              <div className="trade__change-days">
                {[7, 30, 90, 180, 360, 720, 1826].map((day) => (
                  <button
                    className="trade__change-day-button"
                    value={day}
                    onClick={(event) => setDays(+event.target.value)}
                    key={Math.random() + day}
                  >
                    {day === 7
                      ? "1wk"
                      : day === 30
                      ? "1m"
                      : day === 90
                      ? "3m"
                      : day === 180
                      ? "6m"
                      : day === 360
                      ? "1y"
                      : day === 720
                      ? "2y"
                      : day === 1826
                      ? "5y"
                      : day}
                  </button>
                ))}
              </div>
            ) : (
              <select
                className="trade__change-day-select"
                onChange={(event) => setDays(+event.target.value)}
              >
                {[7, 30, 90, 180, 360, 720, 1826].map((day) => (
                  <option
                    value={day}
                    className="trade__change-day-option"
                    key={day}
                  >
                    {day === 7
                      ? "1wk"
                      : day === 30
                      ? "1m"
                      : day === 90
                      ? "3m"
                      : day === 180
                      ? "6m"
                      : day === 360
                      ? "1y"
                      : day === 720
                      ? "2y"
                      : day === 1826
                      ? "5y"
                      : day}
                  </option>
                ))}
              </select>
            )}
          </div>

          <TradeChart series={series} changeChartType={changeChartType} />
        </div>

        <div className="leftpanel">
          <Converter fullData={fullData} getInputValue={getInputValue} />
        </div>
      </section>

      <div className="cryptoinfo">
        <Cryptocoins />
        <LatestPrice fullData={fullData} />
      </div>
    </div>
  );
};

export default Main;
