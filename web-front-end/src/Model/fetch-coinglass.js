import fetch from "node-fetch";
// import axios from "axios";

const COINGLASS_API_KEY = "640ee594b3de4f8e97a7f95aaceec7bf";
const COINGLASS_API_URL = "https://open-api.coinglass.com/public/v2";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    coinglassSecret: COINGLASS_API_KEY,
  },
};

const PERPETUAL_MARKET = "perpetual_market";
const FUNDING_RATE = "funding";
const FUNDING_USD_HISTORY = "funding_usd_history";
const OPEN_INTEREST = "open_interest";

var symbol = "CHZ";
var timeType = "m5";

var urlPerpetualMarket = `${COINGLASS_API_URL}/${PERPETUAL_MARKET}?symbol=${symbol}`;

const fetchPerpetualMarket = () => {
  fetch(urlPerpetualMarket, options)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      console.log(JSON.stringify(response));
    })
    .catch((err) => console.error(err));
};
// fetchPerpetualMarket();

var urlFundingRate = `${COINGLASS_API_URL}/${FUNDING_RATE}`;
const fetchFundingRate = () => {
  fetch(urlFundingRate, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
// fetchFundingRate();
var urlFundingRateHistoryUsd = `${COINGLASS_API_URL}/${FUNDING_USD_HISTORY}?symbol=${symbol}&time_type=${timeType}`;
export const fetchFundingRateHistoryUsd = () => {
  fetch(urlFundingRateHistoryUsd, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(JSON.stringify(response));
    })
    .catch((err) => console.error(err));
};
// fetchFundingRateHistoryUsd();

// const response = await axios.get(urlFundingRateHistoryUsd, options);
// console.log(JSON.stringify(response.data));

const urlOpenInterest = `${COINGLASS_API_URL}/${OPEN_INTEREST}?symbol=${symbol}`;
// var openInterestData = await axios.get(urlOpenInterest, options);
// console.log(JSON.stringify(openInterestData.data));

const fetchingCoinglassData = async () => {
  // try {
  //   const response = await axios.get(
  //     `https://api.github.com/users/eunit99/repos`
  //   );
  //   setData(response.data);
  //   setError(null);
  //   console.log(data);
  // } catch (err) {
  //   setError(err.message);
  //   setData(null);
  // } finally {
  //   setLoading(false);
  // }
};
export default fetchingCoinglassData;
