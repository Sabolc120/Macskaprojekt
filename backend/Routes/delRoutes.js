import express from "express";
import { adoptCat } from "../Controllers/pstController.js";

const delrouter = express.Router()


delrouter.delete('/adoptCat/:id', adoptCat)

export default delrouter