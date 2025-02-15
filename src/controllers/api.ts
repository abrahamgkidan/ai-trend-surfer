import { Request, Response } from "express";
import { scrapeSources } from "../services/scrapeSources";

export const getStories = async (req: Request, res: Response) => {
  const sources = req.body.sources;
  try {
    const stories = await scrapeSources(sources);
    res.status(200).json({ stories });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
