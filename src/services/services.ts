import axios from "axios";

const baseUrl = "https://api.exchangerate.host";

const convertCurrency = async (amount = 0, from: string, to: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/convert?from=${from}&to=${to}&amount=${amount}'`
    );
    return response;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error);
  }
};

export { convertCurrency };
