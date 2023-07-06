const axios = require("axios");
const { API_URL, API_KEY } = process.env;

const handler = async () => {
  const options = {
    method: "GET",
    url: API_URL,
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axios.request(options);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, header, response } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, header, response }),
    };
  }
};

module.exports = { handler };
