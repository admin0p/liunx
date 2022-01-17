const router = require("express").Router();
const controller = require("../controllers/banner");

router.post("/create", controller.createBanner);
router.post("/get", controller.getBanners);
router.post("/update", controller.updateBanner);
router.post("/delete");

module.exports = router;
