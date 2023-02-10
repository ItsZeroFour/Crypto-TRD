import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import demoPhoto from "../../images/demoPhoto.jpg";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Accept-Language": "English",
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "d7ec407c8cmsha5cbdaf4e498df1p1cb349jsn9866abb54b96",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    fetch(
      "https://bing-news-search1.p.rapidapi.com/news/&count=12&textFormat=Raw&setLang=en&safeSearch=Off",
      options
    )
      .then((response) => response.json())
      .then((response) => setNews(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="news">
      {news.length !== 0 ? (
        <div className="container">
          <div className="news-wrapper">
            {news.value.map((data) => (
              <a
                className="news__link"
                href={data.url}
                target="_blank"
                rel="noreferrer"
                key={data.name + Math.random()}
              >
                <div className="news__item">
                  <div className="news__item-header">
                    <h3 className="news__item-title">{data.name}</h3>
                    <img
                      className="news__item-img"
                      src={data?.image?.thumbnail?.contentUrl || demoPhoto}
                      alt={data.name}
                    />
                  </div>

                  <div className="news__item-description">
                    <p>
                      {data.description > 100
                        ? `${data.description.substring(0, 100)} ...`
                        : data.description}
                    </p>
                  </div>

                  <div className="news__item-footer">
                    <div className="news__item-footer-left">
                      <img
                        src={
                          data.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoPhoto
                        }
                        alt={data.provider[0]?.name}
                      />
                      <h4>{data.provider[0]?.name}</h4>
                    </div>

                    <div className="news__item-footer-right">
                      <p className="news__item-footer-date">
                        {moment(data.datePublished).startOf("ss").fromNow()}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="news__preloader">
          <div className="box">
            <div className="fading-lines"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
