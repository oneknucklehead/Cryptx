// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from "react";

function TradingViewWidget() {
  const container = useRef();
  const [datePicker, setDatePicker] = useState("5D");

  const setDate = (data) => {
    setDatePicker(data);
  };

  useEffect(() => {
    // container.current = null;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
            "height":"610",
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": true,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "${datePicker}",
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
    return () => {
      script.remove();
    };
  }, [datePicker]);

  return (
    <div>
      {/* <div>
        <button onClick={() => setDate("1D")}>1D</button>
        <button onClick={() => setDate("5D")}>5D</button>
        <button onClick={() => setDate("1M")}>1M</button>
        <button onClick={() => setDate("3M")}>3M</button>
        <button onClick={() => setDate("6M")}>6M</button>
        <button onClick={() => setDate("1Y")}>1Y</button>
        <button onClick={() => setDate("ALL")}>ALL</button>
      </div> */}
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "100%", width: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
