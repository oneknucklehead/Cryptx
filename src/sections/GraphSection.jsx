import axios from "axios";
import React, { useEffect, useState } from "react";
import TradingViewWidget from "../components/TradingViewWidget";

const GraphSection = () => {
  const [fetchedData, setFetchedData] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
      );
      console.log(res);
      setFetchedData(res);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div> ${fetchedData.data?.bitcoin.usd} </div>
      <div> ₹{fetchedData.data?.bitcoin.inr} </div>
      <TradingViewWidget />
    </div>
  );
};

export default GraphSection;
