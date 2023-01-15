import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantsController";

const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.post("/getRestaurant", RestaurantsController.getRestaurant);
router.post("/createRestaurant", RestaurantsController.createRestaurant);

export default router;
