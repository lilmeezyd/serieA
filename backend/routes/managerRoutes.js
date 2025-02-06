import express from "express"
import { fetchAndSaveTop100, fetchAndSaveTop250, fetchAndSaveTop500,
    fetchFromDb100, fetchFromDb250, fetchFromDb500,
    loadManagerTeams100, loadManagerTeams250,
    loadManagerTeams500
 } from "../controllers/managerController.js";
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post('/load100', loadManagerTeams100)
router.post('/load250', loadManagerTeams250)
router.post('/load500', loadManagerTeams500)
router.get('/get100', fetchFromDb100)
router.get('/get250', fetchFromDb250)
router.get('/get500', fetchFromDb500)
router.post('/fetchandsavetop100', protect,  fetchAndSaveTop100)
router.post('/fetchandsavetop250', protect, fetchAndSaveTop250)
router.post('/fetchandsavetop500', protect, fetchAndSaveTop500)

export default router