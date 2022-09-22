import "dotenv/config";
import axios from "axios";
import { CardInterface } from "../interfaces/cardsInt";

const fetchdata = async () => {
  try {
    const url = "https://proxy.royaleapi.dev/v1/cards";

    const respuesta = await axios.get<CardInterface>(url, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.APY_KEY}`,
        Accept: "application/json ; charset=utf-8",
      },
    });

    return respuesta.data
  } catch (error) {
    console.log(error);
  }
};




export {fetchdata}