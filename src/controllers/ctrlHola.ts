import { Request, Response } from "express";
import { fetchdata } from "../services/hola.services";

const holas = async (req: Request, res: Response) => {
  const respuesta = await fetchdata();

  res.status(200).json(respuesta);
};

export { holas };
