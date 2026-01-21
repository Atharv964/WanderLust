const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingController.index))     //INDEX Route
    .post(isLoggedIn,upload.single("image"),validateListing,wrapAsync (listingController.createListing));     //Create Route

//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListing)) //SHOW Route
    .put(isLoggedIn,isOwner,upload.single("image"),validateListing,wrapAsync (listingController.updateListing)) //Update Route
    .delete(isLoggedIn,isOwner,wrapAsync (listingController.destroyListing)); //DELETE Route

//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync (listingController.renderEditForm));




module.exports = router;