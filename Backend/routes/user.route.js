const router = require("express").Router();
const userController = require("../controllers/user.controller");
const userMiddleware = require("../middlewares/user.middleware");
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.registerTempUser
);

router.post(
  "/verify",
  [body("email").isEmail().withMessage("Invalid email")],
  userController.verifyandRegisterUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.loginUser
);

router.get("/getProfile", userMiddleware.AuthUser, userController.getProfile);

router.get("/logout", userMiddleware.AuthUser, userController.logoutUser);

router.get('/resend-otp', userController.resendOtp);

module.exports = router;
