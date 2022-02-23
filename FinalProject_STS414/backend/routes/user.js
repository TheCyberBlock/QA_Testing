import express from "express";
const router = express.Router(); /* an instance (function) of router*/

import { signin, signup } from "../controllers/user.js";

router.post("/signin", signin); /* this will use .post to send the information from the "fom" to "backend(database)"*/
router.post("/signup", signup);

export default router;