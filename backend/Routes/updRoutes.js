import exrpess from "express"
import { updateVisits } from "../Controllers/updtController.js"
import { addCat } from "../Controllers/pstController.js"

const uprouter = exrpess.Router()

uprouter.post('/visitCat/:id', updateVisits)
uprouter.post('/addCat', addCat)

export default uprouter;
