import axios from "axios";
import React, { useEffect, useState } from "react";
import Badge from "./Badge";

const TrendingCoins = () => {
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      if (res.data.coins.length > 3) {
        res = res.data.coins.slice(0, 3);
      }
      setFetchedData(res);
    };
    fetchData();
  }, []);
  return (
    <div className="bg-white p-6 flex flex-col gap-4 rounded-lg">
      <h3 className="text-2xl font-semibold">Trending Coins (24h)</h3>
      <div className="flex flex-col gap-3">
        {fetchedData?.map((data, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex text-normal items-center gap-1">
              <img className="w-6 h-6" src={`${data.item.thumb}`} />
              <h4>{data.item.name}</h4>
              <p>({data.item.symbol})</p>
            </div>
            <div>
              <Badge>
                <div className="flex gap-1 items-center">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
                  </svg>
                  <p>
                    {data.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </p>
                </div>
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
