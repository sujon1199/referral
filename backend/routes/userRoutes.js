const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMyReferrals, getReferralTreeDetails } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/my-referrals/:refCode", getMyReferrals);
router.post("/referral-tree", getReferralTreeDetails);


module.exports = router;
