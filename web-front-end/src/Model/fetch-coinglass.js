// import fetch from "node-fetch";
// import axios from "axios";

export const symbolList = [
  "BTC",
  "ETH",
  "BNB",
  "XRP",
  "LTC",
  "DOGE",
  "SOL",
  "DOT",
  "ADA",
  "MATIC",
  "ETC",
  "LINK",
  "APE",
  "BCH",
  "TRX",
  "EOS",
  "FIL",
  "CHZ",
  "OP",
  "AXS",
  "AVAX",
  "FTM",
  "ATOM",
  "DYDX",
  "NEAR",
  "APT",
];
export const timeFrameList = ["m1", "m5", "h8"];

const COINGLASS_API_KEY = "640ee594b3de4f8e97a7f95aaceec7bf";
const COINGLASS_API_URL =
  "https://try.readme.io/https://open-api.coinglass.com/public/v2";
const PERPETUAL_MARKET = "perpetual_market";
const FUNDING_RATE = "funding";
const FUNDING_USD_HISTORY = "funding_usd_history";
const OPEN_INTEREST = "open_interest";

const options = {
  method: "GET",
  mode: "cors",
  headers: {
    accept: "application/json",
    coinglassSecret: COINGLASS_API_KEY,
  },
};

export const fetchFundingRateHistoryUsd = async (symbol, timeFrame) => {
  var urlFundingRateHistoryUsd = `${COINGLASS_API_URL}/${FUNDING_USD_HISTORY}?symbol=${symbol}&time_type=${timeFrame}`;
  console.log("production url", urlFundingRateHistoryUsd);
  if (process.env.NODE_ENV !== "production") {
    urlFundingRateHistoryUsd = `/public/v2/${FUNDING_USD_HISTORY}?symbol=${symbol}&time_type=${timeFrame}`;
  }
  console.log("url", urlFundingRateHistoryUsd);

  const data = window
    .fetch(urlFundingRateHistoryUsd, options)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
  const a = await data;

  return a;
};

const fetchingCoinglassData = async () => {};
export default fetchingCoinglassData;
