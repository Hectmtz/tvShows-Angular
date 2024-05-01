const { Router } = require("express");
const { getTvShow, createTvShow, deleteTvShow, updateTvShow, getTvShowById } = require("../controllers/tvshows");

const router = Router();

router.get("/all", getTvShow);

router.get("/", getTvShowById);

router.post("/", createTvShow);

router.put("/:id", updateTvShow);

router.delete("/:id", deleteTvShow);

module.exports = router;