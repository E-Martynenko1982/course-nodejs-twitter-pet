import { Router } from 'express';
import { TwitService } from './twit.service.js';

const twitService = new TwitService();
const router = Router()

router.post("/", (req, res) => {
  const twit = twitService.createTwit(req.body);
  res.status(200).json(twit);
})

export const twitRouter = router

