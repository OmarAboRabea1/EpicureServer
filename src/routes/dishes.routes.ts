import { Router } from "express";
import { DishesController } from "../controllers/dishesController";

const router = Router();

router.get("/getDishes", DishesController.getDishes);
router.post("/getDish", DishesController.getDish);
router.post("/getDishByID", DishesController.getDishByID);
router.post("/createDishes", DishesController.createDishes);

export default router;
