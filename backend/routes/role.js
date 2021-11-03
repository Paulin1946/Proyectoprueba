import express from "express";
import role from "../controllers/role.js";
const router = express.Router()


//http:Localhost:3001/api/role/registerRole
router.post("/registerRole", role.registerRole);

export default router