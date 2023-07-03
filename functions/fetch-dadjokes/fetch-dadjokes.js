const axios = require("axios");

const handler = async () => {
  const options = {
    method: "GET",
    url: process.env.API_URL,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
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
