import { useEffect, useState } from "react";
import Main from "./Container/Main/Main";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import News from "./Container/News/News";
import ContactUs from "./Container/ContactUs/ContactUs";
import Profile from "./Container/Profile/Profile";
import TopCryptocurrency from "./Container/TopCryptocurrency/TopCryptocurrency";
import Error from "./Components/Error/Error";

function App() {
  // UseStates
  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);
  const [price, setPrice] = useState(-1);
  const [fullData, setFullData] = useState({});
  const [loading, setLoading] = useState(true);
  const [getInputValue, setGetInputValue] = useState(() => {
    // Get item and paste into useState
    const getSavedInputValue = localStorage.getItem("savedInputValue");
    const initialValue = getSavedInputValue;
    return initialValue || "bitcoin";
  });
  const [days, setDays] = useState(30);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // SetItem to localStorage
    localStorage.setItem("savedInputValue", getInputValue);
  }, [getInputValue]);

  // Base URL
  const stonksUrl = `https://api.coingecko.com/api/v3/coins/${
    getInputValue === "" || undefined || null
      ? "bitcoin"
      : getInputValue.toLowerCase()
  }/market_chart?vs_currency=usd&days=${days}&interval=1`;

  async function getStonks() {
    const response = await fetch(stonksUrl);
    return response.json();
  }

  const round = (number) => {
    return number ? +number.toFixed(0) : null;
  };

  //  Get Market Data
  useEffect(() => {
    // Refresh data
    let timeoutId;
    async function getLatestPrice() {
      try {
        const data = await getStonks();
        setFullData(data);
        setPrice(data.prices[data.prices.length - 1][1].toFixed(2));
        setLoading(false);
        const prices = data.prices.map((data) => ({
          x: new Date(data[0]),
          y: [data[1]].map(round),
        }));

        setSeries([
          {
            data: prices,
            name: "Price",
          },
        ]);
      } catch (error) {
        setLoading(true);
      }
      timeoutId = setTimeout(getLatestPrice, 10000);
    }

    getLatestPrice();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [getInputValue, days]);

  console.log(getInputValue);

  return (
    <div className="App" onClick={() => setActive(false)}>
      <Header
        setGetInputValue={setGetInputValue}
        setActive={setActive}
        active={active}
      />
      <div className="price">
        {!loading ? (
          <Routes>
            <Route
              exact
              path="Crypto-TRD/"
              element={
                <Main
                  price={price}
                  series={series}
                  fullData={fullData}
                  getInputValue={getInputValue}
                  setDays={setDays}
                />
              }
            />
            <Route path="Crypto-TRD/cryptonews" element={<News />} />
            <Route path="Crypto-TRD/profile" element={<Profile />} />
            <Route path="Crypto-TRD/contactus" element={<ContactUs />} />
            <Route
              path="Crypto-TRD/top_cryptocurrency"
              element={
                <TopCryptocurrency setGetInputValue={setGetInputValue} />
              }
            />
            <Route
              path="*"
              element={<Error setGetInputValue={setGetInputValue} />}
            />
          </Routes>
        ) : (
          <div className="error__container">
            {/* ===== Loader ===== */}
            {/* <div className="box">
            <div className="fading-lines"></div>
          </div> */}

            {/* ===== Error ===== */}
            <Error setGetInputValue={setGetInputValue} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
