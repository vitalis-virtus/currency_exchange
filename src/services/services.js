import axios from "axios";

const baseUrl = "https://api.exchangerate.host";

const convertCurrency = async (amount, from, to) => {
  try {
    const response = await axios.get(
      `${baseUrl}/convert?from=${from}&to=${to}&amount=${amount}'`
    );
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export { convertCurrency };
