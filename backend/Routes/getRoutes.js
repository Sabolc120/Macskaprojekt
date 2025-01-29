import express from "express"
import { getCat, getCats } from "../Controllers/getController.js";

const router = express.Router()


router.get('/getCats', getCats);
router.get('/getCat/:id', getCat)


export default router;