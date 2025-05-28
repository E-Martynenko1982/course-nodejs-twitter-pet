import express from 'express';
import { twitRouter } from './src/twit/twit.controller.js';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config()

const app = express();

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

app.set("views", path.join(__dirname, "/src/views"));
app.set('view engine', 'ejs');
async function main() {
  app.use(express.json());

  app.use('/api/twits', twitRouter);

  app.get("/profile", (req, res) => {
    res.render("profile", {
      user: {
        name: "Evgen",
        age: 25
      }
    });
  })
  app.all('*', (req, res) => {
    res.status(404).json({ message: 'Not found' })
  })
  app.listen(process.env.PORT || 4200, () => {
    console.log('Server is running on port 4200')
  });
}

main();