import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { country_list } from "../../../data/countryCode";
import React, { useEffect, useState } from "react";
import { SlSocialVkontakte } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";

const Conver = ({ fullData, getInputValue }) => {
  const [countryCode, setCountryCode] = useState("USD");
  const [change, setChange] = useState(false);
  const [currency, setCurrency] = useState({});
  const [amount, setAmount] = useState(1);
  const [onMouseMoved1, setOnMouseMoved1] = useState(false);
  const [onMouseMoved2, setOnMouseMoved2] = useState(false);

  useEffect(() => {
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
        `https://api.currencyapi.com/v3/latest?apikey=eIFED7KYk7cgcitQM8HWnjLFZ20O2DqURKPoiStK`,
        options
      )
        .then((response) => response.json())
        .then((response) => setCurrency(response.data));
    } catch (err) {
      console.log(err);
    }
  }, [countryCode]);

  return (
    <section className="converter">
      {fullData ? (
        <div className="converter__container">
          <div className="converter__crypto-item">
            <div className="converter__crypto-img-container">
              <img
                className="converter__crypto-img"
                src={`https://cryptologos.cc/logos/thumbs/${
                  getInputValue === "" ? "bitcoin" : getInputValue.toLowerCase()
                }.png?v=023`}
                alt="cryptocurrency img"
              />
            </div>

            <div className="converter__header-info">
              <h2 className="converter__crypto-price">
                ${fullData.prices[fullData.prices.length - 1][1].toFixed(5)}
              </h2>
              <h2 className="converter__crypto-name">
                {getInputValue.charAt(0).toUpperCase() + getInputValue.slice(1)}
              </h2>
            </div>
          </div>

          <div className="converter__wrapper">
            {!change ? (
              <div className="converter__convert">
                <div className="converter__convert-header">
                  <div style={{ display: "flex" }}>
                    <select
                      className="converter__select"
                      onChange={(event) => setCountryCode(event.target.value)}
                    >
                      {country_list.map((data) => (
                        <option value={data} key={data}>
                          {data}
                        </option>
                      ))}
                    </select>
                    <FontAwesomeIcon
                      icon={faRightLeft}
                      onClick={() => setChange(!change)}
                    />
                    <h2 className="converter__crypto-item">
                      {getInputValue.charAt(0).toUpperCase() +
                        getInputValue.slice(1)}
                    </h2>
                  </div>

                  <input
                    type="number"
                    placeholder="Amount"
                    className="converter__input"
                    min="1"
                    onChange={(event) => setAmount(event.target.value)}
                  />
                </div>

                <div className="converter__convert-content">
                  {currency !== undefined &&
                  Object.keys(currency).length !== 0 ? (
                    <h2>
                      Converted:{" "}
                      {(
                        (currency[countryCode].value * +amount) /
                        +fullData.prices[fullData.prices.length - 1][1].toFixed(
                          5
                        )
                      ).toFixed(5)}
                    </h2>
                  ) : (
                    <p className="converter__error">
                      It looks like the limit on API calls has ended. Please
                      come back later
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="converter__convert">
                <div className="converter__convert-header">
                  <div style={{ display: "flex" }}>
                    <h2>
                      {getInputValue.charAt(0).toUpperCase() +
                        getInputValue.slice(1)}
                    </h2>

                    <FontAwesomeIcon
                      icon={faRightLeft}
                      onClick={() => setChange(!change)}
                    />

                    <select
                      className="converter__select"
                      onChange={(event) => setCountryCode(event.target.value)}
                    >
                      {country_list.map((data) => (
                        <option value={data} key={data}>
                          {data}
                        </option>
                      ))}
                    </select>
                  </div>

                  <input
                    type="number"
                    placeholder="Amount"
                    className="converter__input"
                    min="1"
                    onChange={(event) => setAmount(event.target.value)}
                  />
                </div>

                <div className="converter__convert-content">
                  {currency !== undefined &&
                  Object.keys(currency).length !== 0 ? (
                    <h2>
                      Converted:{" "}
                      {(
                        +fullData.prices[fullData.prices.length - 1][1].toFixed(
                          5
                        ) *
                        (currency[countryCode].value * +amount)
                      ).toFixed(5)}
                    </h2>
                  ) : (
                    <p className="converter__error">
                      It looks like the limit on API calls has ended. Please
                      come back later
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="circle__bar-wrapper">
            <div
              className="circle-wrap"
              onMouseEnter={() => setOnMouseMoved1(true)}
              onMouseLeave={() => setOnMouseMoved1(false)}
            >
              <div className="circle">
                <div className="mask half">
                  <div
                    className="fill"
                    style={{
                      transform: `rotate(${
                        fullData.market_caps[
                          fullData.market_caps.length - 1
                        ][1] / 300000000
                      }deg)`,
                    }}
                  ></div>
                </div>

                <div className="mask full">
                  <div
                    className="fill"
                    style={{
                      transform: `rotate(${
                        fullData.market_caps[
                          fullData.market_caps.length - 1
                        ][1] / 300000000
                      }deg)`,
                    }}
                  ></div>
                </div>

                <div className="inside-circle">
                  <p>Market Caps</p>
                </div>
              </div>
            </div>

            {onMouseMoved1 && (
              <div className="circle__menu-info">
                <p>
                  ${" "}
                  {fullData.market_caps[
                    fullData.market_caps.length - 1
                  ][1].toFixed(5)}
                </p>
              </div>
            )}

            <div
              className="circle-wrap2"
              onMouseEnter={() => setOnMouseMoved2(true)}
              onMouseLeave={() => setOnMouseMoved2(false)}
            >
              <div className="circle">
                <div className="mask2 half">
                  <div
                    className="fill2"
                    style={{
                      transform: `rotate(${
                        fullData.total_volumes[
                          fullData.total_volumes.length - 1
                        ][1] / 300000000
                      }deg)`,
                    }}
                  ></div>
                </div>

                <div className="mask2 full2">
                  <div
                    className="fill2"
                    style={{
                      transform: `rotate(${
                        fullData.total_volumes[
                          fullData.total_volumes.length - 1
                        ][1] / 300000000
                      }deg)`,
                    }}
                  ></div>
                </div>

                <div className="inside-circle">
                  <p>Total Volumes</p>
                </div>
              </div>
            </div>

            {onMouseMoved2 && (
              <div className="circle__menu-info2">
                <p>
                  ${" "}
                  {fullData.total_volumes[
                    fullData.total_volumes.length - 1
                  ][1].toFixed(5)}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <p className="converter__error">Error! Please try again later</p>

          <div className="converter__proloader">
            <div className="box">
              <div className="fading-lines"></div>
            </div>
          </div>
        </div>
      )}

      <div className="social">
        <div className="social__container">
          <a
            className="social__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ItsZeroFour"
          >
            <BsGithub /> GitHub
          </a>
          <a
            className="social__link"
            target="_blank"
            rel="noreferrer"
            href="https://vk.com/nullbebra"
          >
            <SlSocialVkontakte /> VK
          </a>
        </div>
      </div>
    </section>
  );
};

export default Conver;
