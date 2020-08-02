import { Router } from "express";
import notes from "../controllers/notes";

const router = Router();

/** NOTES **/
router.get("/notes", notes.all);
router.post("/note/add", notes.add);
router.post("/note/edit", notes.edit);

export default router;
