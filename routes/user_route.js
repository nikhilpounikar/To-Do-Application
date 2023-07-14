const express = require("express");

const userController = require("../controller/user_controller");

const router = express.Router();

router.post("/update/:id", passport.checkAuthentication, userController.update);

router.get("/profile", passport.checkAuthentication, userController.profile);

router.get("/sign-up", userController.signUp);

router.get("/sign-in", userController.signIn);

router.post("/create", userController.create);

router.get("/sign-out", userController.destroySession);