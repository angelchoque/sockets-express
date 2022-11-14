import { Router } from "express";
const router = Router();
import { join } from "path";
import * as url from 'url';
import isLogged from "../middlewares/isLogged.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const views = join(__dirname, "/../views");

router.get("/", isLogged, (req, res) => {
    res.sendFile(views + "/index.html");
});

router.get("/register", (req, res) => {
  res.sendFile(views + "/register.html")
})

export default router;