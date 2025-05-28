import { Router } from 'express';
import { TwitService } from './twit.service.js';
import { authMiddleware } from '../auth.middleware.js';

const twitService = new TwitService();
const router = Router()

router.post("/", authMiddleware, (req, res) => {
  if (!req.body?.text?.length) {
    return res.status(400).json({ message: "Text is required" })
  }
  const twit = twitService.createTwit(req.body);
  res.status(200).json(twit);
})

export const twitRouter = router

