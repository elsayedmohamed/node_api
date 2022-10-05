import express, { Router } from "express";


import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();



router.get("/", getUsers);

// ======================================================================

//Get All USERS with add specific Id
router.post("/", createUser);

// ======================================================================

//Get USER By specific Id

router.get("/:id", getUser);

// ======================================================================

//DELETE USER
router.delete("/:id", deleteUser);

// ======================================================================

//UPDATE Specific User details

router.patch("/:id", updateUser);

export default router;
