import React from "react";
import Chart from "react-apexcharts";

const TradeChart = ({ series, changeChartType }) => {
  const chart = {
    options: {
      xaxis: {
        type: "datetime",
      },

      // Up and Down Column colors
      plotOptions: {
        //* Bar
        bar: {
          borderRadius: 3,
        },

        //* Area
        area: {
          borderRadius: 0,
        },
      },

      dataLabels: {
        enabled: false,
      },

      // Data menu with Open, High, Low, Close Price
      tooltip: {
        enabled: true,
        theme: "dark",
        fontFamily: "Poppins",

        style: {
          fontSize: "16px",
          fontFamily: "Poppins",
        },
      },

      // TODO: Change it
      defaultLocale: "en",

      zoom: {
        enabled: true,
        type: "x",
        autoScaleYaxis: true,
        zoomedArea: {
          fill: {
            color: "#90CAF9",
            opacity: 0.4,
          },
          stroke: {
            color: "#0D47A1",
            opacity: 0.4,
            width: 1,
          },
        },
      },
    },
  };

  return (
    <section className="tradechart">
      <Chart
        options={chart.options}
        series={series}
        name="bebra"
        type={changeChartType === "" ? "candlestick" : changeChartType}
        width="100%"
        height="300%"
      />
    </section>
  );
};

export default TradeChart;
